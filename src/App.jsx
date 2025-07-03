import "./App.css";
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PageContent from "./components/PageContent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <PageContent />
      </main>
      <Footer />
    </>
  );
}

export default App;
