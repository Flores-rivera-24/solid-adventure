import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Mi Aplicación
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-gray-200">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/Perfil" className="text-white hover:text-gray-200">
              Perfil
            </Link>
          </li>
          <li>
            <Link to="/Dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};