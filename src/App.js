import React from "react";
import ParticlesBg from "particles-bg";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
         <ParticlesBg type="cobweb" bg={true} color="#c9c9c9" />
         <Home />
    </div>
  );
}

export default App;
