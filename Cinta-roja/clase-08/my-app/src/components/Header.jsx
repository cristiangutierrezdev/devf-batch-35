import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <header>
        <h1>Hello World</h1>
        <ul>
          <li>Opcion 1</li>
          <li>Opcion 2</li>
          <li>Opcion 3</li>
        </ul>
      </header>
      <div>
        <h2>Otro Titulo</h2>
      </div>
    </div>
  );
}

export default Header;
