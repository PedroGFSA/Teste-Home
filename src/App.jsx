import React from "react";
import Header from "./Header.jsx";
import BoasVindas from "./BoasVindas.jsx";
import Footer from "./Footer.jsx";
import { ContextStorage } from "./Context.jsx";

const App = () => {
  return (
    <div>
      <ContextStorage>
        <Header />
        <BoasVindas />
        <Footer /> 
      </ContextStorage>
    </div>
  );
};

export default App;
