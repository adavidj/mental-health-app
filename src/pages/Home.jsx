import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

 function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold text-center mb-6">
          Comprendre la santé mentale
        </h2>
        <p className="text-lg text-gray-700 text-center">
          Des ressources pour mieux vivre au quotidien.
        </p>
      </div>
    </div>
  );
}

export default Home;