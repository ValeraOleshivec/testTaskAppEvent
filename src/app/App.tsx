import React from "react";
import "../../config/styles/global.scss";
import { AppRouter } from "app/Providers/router";
import { Navbar } from "widgets/NavBar";
const App = () => {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
};

export default App;
