import React from "react";
import "../Css/Home.css";

import { Link } from "react-router-dom";

import logo from "../assets/logo completo.svg";
import heroWoman from "../assets/heroWomanTraveler.jpg";

function Home() {
  return (
    <>
      <section className="heroContainer">
        <div>
          <nav></nav>
          <a
            href="https://alemdomapa.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="logo alem do mapa" className="logoAlem" />
          </a>
        </div>
        <section className="heroContent">
          <div>
            <img
              src={heroWoman}
              alt="Mulher com oculos de sol viajando"
              className="heroImage"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Home;
