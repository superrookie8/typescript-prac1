import React, { useState } from 'react';

function App() {
  console.log('이게 되나?')
  console.log(App)
  
  interface ISignup {
    email : string | undefined;
    password: string | number;
}

interface FormElements extends HTMLFormControlsCollection{
  yourInputName : HTMLInputElement
}
interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements
}

const [loginData, setLoginData] = React.useState<ISignup | null>(
null
)
const [email, setEmail] =React.useState<ISignup |null>( null)
const [password, setPassword] =React.useState<ISignup | null>(null)
  
const onEmailHandler =(e : React.ChangeEvent<HTMLInputElement>)=>{
  e.preventDefault()
  const {name, value} = e.currentTarget;
}
  
  const onPasswordHandler =(e : React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault()
    const {name, value} = e.currentTarget;
  }

  const onSignUpHandler =(e : React.FormEvent<YourFormElement>) =>{
    setLoginData(loginData)
  }

  return (
    <div className="App" >
      <form onSubmit={onSignUpHandler} >
        <h1>회원가입</h1>
        <div>email: <input type ='email' onChange={onEmailHandler}></input></div>
        <div>password: <input type ="password" onChange={onPasswordHandler}></input></div>
        <button type="submit"> 회원가입 하기</button>
        <button>
         로그인 하러 가기
        </button>
      </form>
    </div>
  );
}

export default App;
