import 'react-native-gesture-handler';
import { StyleSheet, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from "react";
import * as Font from 'expo-font';
import AppNavigator from './navigation/AppNavigator';



SplashScreen.preventAutoHideAsync();

export default function App() {

  const [appIsLoaded, setAppIsLoaded] = useState(false);

  useEffect(() => {
    
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "black": require("./assets/fonts/Poppins-Black.ttf"),
      "blackItalic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
      "bold": require("./assets/fonts/Poppins-Bold.ttf"),
      "boldItalic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
      "extraBold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
      "extraBoldItalic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
      "extraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"), 
      "extraLightItalic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
      "italic": require("./assets/fonts/Poppins-Italic.ttf"),
      "light": require("./assets/fonts/Poppins-Light.ttf"),
      "lightItalic": require("./assets/fonts/Poppins-LightItalic.ttf"),
      "medium": require("./assets/fonts/Poppins-Medium.ttf"),
      "mediumItalic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
      "regular": require("./assets/fonts/Poppins-Regular.ttf"),
      "semiBold": require("./assets/fonts/Poppins-SemiBold.ttf"), 
      "semiBoldItalic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
      "thin": require("./assets/fonts/Poppins-Thin.ttf"),  
      "thinItalic": require("./assets/fonts/Poppins-ThinItalic.ttf"),
       
        });
      }
      catch (error) {
        console.log.error();
      }
      finally {
        setAppIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayout = useCallback(async () => {
    if (appIsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsLoaded]);

  if (!appIsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider
      style={styles.container}
      onLayout={onLayout}>
        <AppNavigator />
        
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  label: {
    color: 'black',
    fontSize: 18,
    fontFamily: "regular"
  }
});

