import React, { useState, useConext } from "react"
import AuthForm from "./AuthForm.js"
import { UserContext } from "./context/UserProvider.js"

const initInputs = { username: "", password: ""}

export default function Auth(){
  const [ inputs, setInputs ] = useState(initInputs)
  const [ toggle, setToggle ] = useState(false)

  const { addTodo, login, resetAuthErr, errMsg } = useContext(UserContext)

  function handleChange(e){
    const { name, value } = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }
  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }
  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }
  function toggleForm(){
    setToggle(prev => !prev)
    resetAuthErr()
  }

  return(
    <div className="auth-container">
      <h1>Todo App</h1>
      {!toggle ?
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleSignup}
            btnText="Signup"
            errMsg={errMsg}
            inputs={inputs} />
          <p onClick={toggleForm}>Already a Member?</p>
        </>
        :
        <>
          <AuthForm
            handleChange={handleChange}
            handleSubmit={handleLogin}
            btnText="Login"
            errMsg={errMsg}
            inputs={inputs} />
          <p onClick={toggleForm}>Not Yet a Member?</p>
        </>
      }
    </div>
  )
}