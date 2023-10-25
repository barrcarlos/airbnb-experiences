import { useState } from "react";
import react from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Experiences from "./components/Experiences";
import  data  from "./components/data.js";

function App() {
   
  const cards = data.map((item) => {
    return (
      <Experiences
        key={item.id}
        name={item.name}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    );
  });

  return (
    <>
      <NavBar />
      <Section />
      {/* Llamado a la funcion card que se encarga de acceder al objeto de data.js y ser utilizado por el componente Experiences*/}
      <div className="flex flex-ro">
        {cards}
      </div>
    </>
  );
}

export default App;
