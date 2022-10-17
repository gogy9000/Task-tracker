export type Data<T = any> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number
}
export type Item<D=any>={
    item:D
}

export type TodoListItem = {
    "_id": string,
    "title": string
    "addedDate": string
    "order": number
    isASynchronizedTodo?:boolean
}

export type GetTaskType = {
    error:string|null
    items: TaskItem[]
    totalCount:number
}

export type TaskItem = {
    description: string|null
    title: string
    status: number
    priority: number
    startDate: string|null
    deadline: string|null
    _id: string
    todoListId: string
    order: number
    addedDate: string
}
export type LoginPayloadType={
    email:string
    password:string
    rememberMe?:boolean
    captcha?:boolean
}
export type AuthDataType = {
    email: string
    id: string
    login: string
}