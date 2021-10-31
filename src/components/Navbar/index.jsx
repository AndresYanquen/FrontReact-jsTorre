import React from "react";
import { NavbarLayout } from "./styled";

const Navbar = () => {
  return (
    <NavbarLayout>
      <ul>
        <li>
          <a href="/"> Inicio</a>
        </li>
        <li>
          <a href="https://torre.co" target="blank">
            {" "}
            Torre.co
          </a>
        </li>
      </ul>
    </NavbarLayout>
  );
};

export default Navbar;
