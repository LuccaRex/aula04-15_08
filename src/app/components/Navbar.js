'use client'
import { validateToken } from '../functions/validateToken';
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import "./navbar.css"


export default function Navbar() {

  const { push, refresh } = useRouter();
  const handlerRemoveCookies = async (e) => {
    e.preventDefault();
    Cookies.remove('token');
    localStorage.removeItem('name');
    refresh('/')

  }
  return (
    <header>
  <div class="main-content">
    <nav id='navbar' class='navbar' role='navigation'>
      <ul class='nav-menu'>
        <li class='nav-menu-item'><a href='/'>Home</a></li>
        <li class='nav-menu-item'><a href='/pages/alter'>Alterar</a></li>
        <li class='nav-menu-item'><a href='/pages/register'>Cadastrar</a></li>
        <li><button class='logout-button' onClick={handlerRemoveCookies}>Sair</button></li>
      </ul>
    </nav>
  </div>
</header>

  )
}