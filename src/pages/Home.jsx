import React from "react";
import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import CardGroup from "../components/CardGroup";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Jumbotron />
        <CardGroup />
      </div>
      <Footer />
    </div>
  );
}
