'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './login.css'

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
  const userAuth =await handlerAcessUser(user);
  if(userAuth.token === undefined){
    toast.error("erro de usuário ou senha ");
  }
  push('/pages/dashboard')
    } catch {
      toast.error("erro na aplicação")
    }
  }
  return (
    <div  >
      <div className="login_box">
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
        <div className="input_box">
        <input type="email" onChange={(e) => { setUser({ ...user, email: e.target.value }) }}/>
        <label for="">E-mail</label>
        </div>

        <div className="input_box">
        <input type='password' onChange={(e) => { setUser({ ...user, password: e.target.value }) }}/>
        <label for="">Senha</label>
        </div>
        
        <button className="enter">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
          Entrar
          </button>
      </form>
      </div>
      <ToastContainer/>

    </div>
  )
}