import React from "react";
import Navbar from "./Components/Navbar.jsx";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    //set max height to 100vh of container
    // set background color to dark
    <Container fluid>
    <Navbar/>
    </Container>
  );
};
export default App;
