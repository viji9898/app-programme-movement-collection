import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import logo from "../../images/logo.svg";

import { Link } from "react-router-dom";
import { MainMenu } from "./mainMenu";

export const NavBar = () => {
  return (
    <Navbar sticky="top">
      <Container>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar.Brand>{"Programmes"}</Navbar.Brand>
        </Link>
        <Nav className="justify-content-end">
          <MainMenu />
        </Nav>
      </Container>
    </Navbar>
  );
};
