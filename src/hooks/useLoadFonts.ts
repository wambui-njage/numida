import { useState, useEffect } from "react";
import * as Font from "expo-font";

const useLoadFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "robot-regular": require("../../assets/fonts/Roboto-Regular.ttf"),
          "robot-bold": require("../../assets/fonts/Roboto-Bold.ttf"),
        });
        setFontsLoaded(true);
      } catch (error) {
        //sentry logger
        console.error("Error loading fonts", error);
      }
    };

    loadFonts();
  }, []);

  return fontsLoaded;
};

export default useLoadFonts;
