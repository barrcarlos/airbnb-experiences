import { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import Experiences from "./components/Experiences";
import Morocha from "./assets/images/Morocha.jpg";
import Blondie from "./assets/images/Bloondie.png"
import Guy from "./assets/images/Guy.jpg"

function App() {
  return (
    <>
      <NavBar />
      <Section />
      <div className="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          <Experiences 
            name="Morocha" 
            img={Morocha}
            rating="5.0"
            reviewCount={6}
            country= "USA"
            title="Life lessons with "
            price={136}
          />
          <Experiences 
          name="Blondie" 
          img={Blondie}
          rating="4.0"
          reviewCount={10}
          country= "RD"
          title="Bet for it with "
          price={200}
          />
          <Experiences 
          name="Guy" 
          img={Guy}
          rating="4.5"
          reviewCount={20}
          country= "MX"
          title="Go for it with "
          price={150}
          />
        </div>
      </div>
    </>
  );
}

export default App;
