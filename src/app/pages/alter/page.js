'use client'
import React from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../components/Navbar";
import '../../styles.css'

export default async function alter() {

  const submitEvent = (e) => {
    e.preventDefault();
    toast.success('Usuário alterado')
  }
  return (
<>
<Navbar/>

    <div className="login_box">
      <h1>Alterar</h1>

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
        alter
          </button>
      </form>
      

    </div>
    <ToastContainer />
    </>


  );
};