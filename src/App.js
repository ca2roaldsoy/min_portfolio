import React from "react";
import ParticlesBg from "particles-bg";
import NavMenu from "./components/navbar/NavMenu";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
         <ParticlesBg type="cobweb" bg={true} color="#c9c9c9" />
         <Container>
         <NavMenu />
         </Container>
    </div>
  );
}

export default App;
