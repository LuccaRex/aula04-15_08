'use client'

import { postUser } from '@/app/functions/handlerAcessAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import '../../styles.css'

export default async function register() {
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:'',
  });
  const { push } = useRouter();

  const submitEvent = async (e) => {
    e.preventDefault();
    try{
      await postUser(user);
      await new Promise((resolve) => {
        toast.success('Usuário cadastrado');
        setTimeout(resolve, 5000)
      });
      return push("/pages/dashboard");
    } catch {
      return toast.console.error(("Erro"));
    }
  };
  return (
<>
<Navbar/>

    <div className="login_box">
      <h1>Cadastrar</h1>

      <form action="" onSubmit={submitEvent}>
        <div className="input_box">

          <input type="text" required />
          <label htmlFor="">nome</label>
        </div>

        <div className="input_box">

          <input type="email" required />
          <label htmlFor="">E-mail</label>
        </div>

        <div className="input_box">

          <input type="password" name="pass" id="" required />
          <label htmlFor="">Senha</label>
        </div>

        <button className="enter">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Cadastrar
          </button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};