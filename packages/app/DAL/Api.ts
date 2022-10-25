import { BaseQueryFn, createApi } from '@reduxjs/toolkit/dist/query/react'
import { AuthDataType, Data, GetTaskType, Item, LoginPayloadType, TaskItem, TodoListItem } from './types/types'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import { loadStorage, saveStorage } from 'app/Utils/AsyncStorageUtils'


const axiosQuery = (
  { baseUrl, withCredentials, headers }:
    {
      baseUrl: string,
      withCredentials?: boolean,
      headers?: AxiosRequestConfig['headers']
    } = { baseUrl: '' }
): BaseQueryFn<{
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
},
  unknown,
  unknown> =>
  async ({ url, method, data, params }) => {
    // из-за того что бек расчитан под работу только с вэб приложениями, приходится имитировать браузерные запросы
    //прокидывая браузерные куки с каждым запросом
    const cookie = await loadStorage("Cookie")
    console.log(cookie)
    if (cookie) {
    headers = {
        ...headers,
        "cookie": `_ym_d=1649395568; _ym_uid=1649395568426605962; ASP.NET_SessionId=opdrxfnafx0gj2g1ulp5mzs3; _ym_isad=2; ${cookie}`
    }
    }
    try {
      // console.log(headers)
      const result = await axios({ url: baseUrl + url, method, data, params, headers, withCredentials })
      console.log(result)
      if (result.headers["set-cookie"]) {

          saveStorage("Cookie", result.headers["set-cookie"]?.join(""))
      }
      return { data: result.data }
    } catch (axiosError) {
      if (axiosError instanceof AxiosError) {
        let err = axiosError as AxiosError
        console.log(err)
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message
          }
        }
      } else {
        throw axiosError
      }
    }
  }


export const Api = createApi({
  reducerPath: 'Api',
  tagTypes: ['login', 'logout', 'postTodo', 'deleteTodo', 'putTodo', 'postTask', 'putTask', 'deleteTask'],
  baseQuery: axiosQuery(
    {
      // baseUrl: `https://mini-trello-backend.herokuapp.com`
      baseUrl:'https://social-network.samuraijs.com/api/1.1/',
      headers: {
          "API-KEY": "1fb0efe7-1c1f-46ce-bb74-74ed02f7875f"
      },
      withCredentials: true
    }
  ),
  endpoints: ((build) => ({
    authMe: build.query<Data<AuthDataType>, void>({
      query: () => ({ url: `/auth/me`, method: 'get' }),
      providesTags: () => ['login', 'logout']
    }),
    login: build.mutation<Data<{ userId: string }>, LoginPayloadType>({
      query: (payload) => ({ url: `/auth/login`, method: 'POST', data: payload }),
      invalidatesTags: ['login']
    }),
    logout: build.mutation<Data<{}>, void>({
      query: (payload) => ({ url: `/auth/login`, method: 'DELETE', body: payload }),
      invalidatesTags: ['logout']
    }),

    getTodoList: build.query<TodoListItem[], void>({
      query: () => ({ url: `/todo-lists`, method: 'get' }),
      providesTags: () => ['postTodo', 'putTodo', 'deleteTodo'],
      transformResponse:(response:TodoListItem[])=>{
        console.log(response)

         response.forEach((todo)=>{
          // @ts-ignore
          todo._id=todo.id
           // @ts-ignore
           delete todo.id
        })
        return response
      }
    }),
    postTodo: build.mutation<Data<Item<TodoListItem>>, string>({
      query: (title: string = 'New todo') => ({ url: `/todo-lists`, method: `post`, data: { title } }),
      invalidatesTags: ['postTodo']
    }),
    putTodo: build.mutation<Data<{}>, { title: string, todoId: string }>({
      query: (payload) => ({ url: `/todo-lists/${payload.todoId}`, method: `put`, data: { title: payload.title } }),
      invalidatesTags: ['putTodo']
    }),
    deleteTodo: build.mutation<Data<{}>, string>({
      query: (todoId) => ({ url: `/todo-lists/${todoId}`, method: 'delete' }),
      invalidatesTags: ['deleteTodo']
    }),

    getTasks: build.query<GetTaskType, { todolistId: string, count?: number, page?: number }>({
      query: ({ todolistId, page = 1, count = 100 }) => ({
        url: `/todo-lists/${todolistId}/tasks`,
        method: 'get',
        params: { count, page }
      }),
      providesTags: () => ['postTask', 'putTask', 'deleteTask']
    }),

    postTask: build.mutation<Data<Item<TaskItem>>, { todolistId: string, title: string }>({
      query: ({ todolistId, title }) => {
        return { url: `/todo-lists/${todolistId}/tasks`, method: 'post', data: { title } }
      },
      invalidatesTags: ['postTask']
    }),

    putTask: build.mutation<Data<Item<TaskItem>>, TaskItem>({
      query: (task) => ({ url: `/todo-lists/${task.todoListId}/tasks/${task._id}`, method: 'put', data: task }),
      invalidatesTags: ['putTask']
    }),
    deleteTask: build.mutation<Data<{}>, { todolistId: string, taskId: string }>({
      query: ({ todolistId, taskId }) => ({ url: `/todo-lists/${todolistId}/tasks/${taskId}`, method: 'delete' }),
      invalidatesTags: ['deleteTask']
    })
  }))
})

