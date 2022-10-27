

const doubleTap =() => {
  let tapCount = 0
  return () => {
    tapCount++
    setTimeout(() => {
      tapCount = 0
    }, 300)
    if (tapCount === 2) {
      // changeCurrentTodo(todo)
      // changeCurrentTask(task)
      // router.push('/TaskList')
      // navigation.navigate("TodoScreen", {screen: "TaskScreen", params: {screen: "TaskView"}})
    } else {
    }
  }
}