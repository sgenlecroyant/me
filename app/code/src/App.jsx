import { Javascript, ThirtyFpsSelectRounded } from "@mui/icons-material";
import { Box, Drawer, styled } from "@mui/material";
import { useEffect } from "react";
import AppBar from "./components/app-bar/AppBar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import AppMenu from "./components/menu/AppMenu";
import Sections from "./components/sections/Sections";
import Skills from "./components/sections/skills/Skills";
import Skills3D from "./components/sections/skills/Skills3D";
import Social from "./components/social/Social";
import TestTypescript from "./components/TestTypescript";
import Home from "./pages/home-page/Home";

function App() {

  useEffect(() => {

  }, [])


  const MyDrawer = styled(Drawer)(({ theme }) => {
    return {
      color: "red",
      marginTop: "20px",
      height: "100%",
    }
  })

  return (
    <div className="App">
      <AppBar />
          <Intro />
          <Sections>
            <Skills />
            <Skills3D />
            <Contact />
            <Social />
          </Sections>
      </div>


  );
}


export default App;
