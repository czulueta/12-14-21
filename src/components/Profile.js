import React, { useContext } from "react"
import { UserContext } from "./context/UserProvider.js"

export default function Profile(){
  const { addTodo, todos } = useContext(UserContext)
  return(
    <div className="profile">
      <h1>Welcome {}</h1>
      <h3>Add a Todo</h3>
      <TodoForm addTodo={addTodo} />
      <h3>Your Todos</h3>
      <TodoList todos={todos} />
    </div>
  )
}