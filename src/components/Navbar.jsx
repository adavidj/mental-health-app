import React from "react";

 function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white shadow-lg">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold">SM</h1>
        <div className="space-x-4">
          <a href="/" className="hover:underline">Accueil</a>
          <a href="/about" className="hover:underline">À propos</a>
          <a href="/contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;