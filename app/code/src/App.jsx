import { Javascript, ThirtyFpsSelectRounded } from "@mui/icons-material";
import { Box, Drawer, styled } from "@mui/material";
import { useEffect, useState } from "react";
import AppBar from "./components/app-bar/AppBar";
import AboutMe from "./components/contact/AboutMe";
import Contact from "./components/contact/Contact";
import ContactChatIcon from "./components/contact/ContactChatIcon";
import MyBottomNavigationAction from "./components/contact/MyBottomNavigationAction";
import Focus from "./components/focus/Focus";
import Intro from "./components/intro/Intro";
import AppMenu from "./components/menu/AppMenu";
import Sections from "./components/sections/Sections";
import Skills from "./components/sections/skills/Skills";
import Skills3D from "./components/sections/skills/Skills3D";
import Social from "./components/social/Social";
import TestTypescript from "./components/TestTypescript";
import Home from "./pages/home-page/Home";

function App(props) {

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {

  }, [])


  const MyDrawer = styled(Drawer)(({ theme }) => {
    return {
      color: "red",
      marginTop: "20px",
      height: "100%",
    }
  })

  const loadSpinner = (App) => {
    return isLoading ? (<div className="spinner_container">
      <div className="loading_spinner"></div>
    </div>) : App;
  }


  return (
    <div className="App_Wrapper">

    <div className="App">
      <AppBar />

      <Intro />
      <Sections>
        <Skills />
        <Focus />
        <Contact/>
        <ContactChatIcon />
        <Social />
      </Sections>
      <MyBottomNavigationAction />
    </div>
    </div>
  );
}


export default App;
