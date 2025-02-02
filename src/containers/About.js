import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";

import StackProgress from "./skillProgress/skillProgress";

import Education from "./education/Education";

import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./About.scss"
const About = () => {
    const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
    const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
    const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
      useState(true);
  
    useEffect(() => {
      if (splashScreen.enabled) {
        const splashTimer = setTimeout(
          () => setIsShowingSplashAnimation(false),
          splashScreen.duration
        );
        return () => {
          clearTimeout(splashTimer);
        };
      }
    }, []);
  
    const changeTheme = () => {
      setIsDark(!isDark);
    };
  
    return (
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <div className="about">
              <h1 className="abouttt">
                About Me
              </h1>
              <div className="aboutdiv">
              <p className="aboutt">I am very ambitious software developer with a unique background that has prepared me to be a team player who communicates effectively, faces problems analytically and has the technical skills to tackle any challenge.</p>
              </div>
              </div>
              <Education />
              <StackProgress />
            </>
          )}
        </StyleProvider>
      </div>
    );
  };

export default About;