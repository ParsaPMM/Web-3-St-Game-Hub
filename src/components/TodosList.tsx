import useTodos from "../hooks/useTodos"



// component function
const TodosList = () => {
    const {data:todos,isError,isPending} = useTodos()

  return (
    <ul>
        {todos?.map(todo => (
            <li key={todo.id}>
                {todo.title}
            </li>
        ))}
    </ul>
  )
}

export default TodosList