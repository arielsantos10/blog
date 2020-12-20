import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  return (
    <div className="navbar">
        <Link to="/" key="/"><h1>Blog Experience</h1></Link>
        <Link className="perfil" to="/perfil" key="/perfil">Perfil Usuários</Link>
    </div>
  );
}
