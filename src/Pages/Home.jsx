import React from "react";
import "../Css/Home.css";
import Navbar from "../Components/Navbar";

import { Link } from "react-router-dom";

import heroWoman from "../assets/heroWomanTraveler.jpg";

function Home() {
  return (
    <>
      <section className="heroContainer">
        <div>
          <Navbar />
        </div>
        <section className="home_heroContent">
          <div className="hero_content">
            <div>
              <h1>
                Descubra o mundo <br /> que te espera
              </h1>
            </div>
            <div className="hero_buttons">
              <a href="" className="button_sale">
                Conheça nossas ofertas
              </a>
              <a href="" className="button_explore">
                Explore novos destinos
              </a>
            </div>
            <p>
              Conheça nossos pacotes e viva experiências únicas com conforto e
              tranquilidade.
              <br /> Viaje com quem entende do seu conforto e da sua liberdade.
            </p>
          </div>
          <div className="hero_Image">
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
