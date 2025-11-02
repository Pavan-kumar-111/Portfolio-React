import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import feather from "feather-icons";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Posts from "./components/Posts";
import UserForm from "./components/UserForm";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Experience />
      <UserForm />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
