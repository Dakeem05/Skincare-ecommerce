import React from "react";
import { Link } from "react-router-dom";
import appStyles from "./App.module.css";
import { Nav } from "./Components/Common components/Nav";
import { Hero } from "./Components/Home components/Hero";
import { Section1 } from "./Components/Home components/Section1";;
import { Section2 } from "./Components/Home components/Section2";
import { Section3 } from "./Components/Home components/Section3";

function App() {
  return (
    <>
      <header id={appStyles.header}>
        <Nav navId_home={appStyles.current_link}/>
        <Hero/>
      </header>
      <Section1/>
      <section id={appStyles.section2i}>

      <Section2/>
      </section>
      <section id={appStyles.section3i}>
      <Section3/>

      </section>
    </>
  )
}

export default App