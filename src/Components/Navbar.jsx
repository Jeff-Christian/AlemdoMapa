import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo completo.svg";
import "../Css/Home.css";

function Navbar() {
  return (
    <>
      <nav className="header_Menu">
        <ul>
          <li>
            <Link to="/">Produtos</Link>
          </li>
          <li>
            <Link to="/">Orçamentos</Link>
          </li>
          <li>
            <Link to="/">Dicas de viagem</Link>
          </li>
          <li>
            <Link to="/">Sobre nós</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Trabalhe conosco</Link>
          </li>
        </ul>
        <a
          href="https://alemdomapa.com.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={logo} alt="logo alem do mapa" className="logoAlem" />
        </a>
      </nav>
    </>
  );
}

export default Navbar;
