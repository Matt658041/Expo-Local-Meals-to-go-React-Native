import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, {useState, useEffect} from "react";
import { ThemeProvider } from "styled-components/native";
import * as firebase from "firebase"
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyD1F9bGB0m4XvTaQJyYHJp_W0VWXWKIrgA",
  authDomain: "mealstogo-5af3d.firebaseapp.com",
  projectId: "mealstogo-5af3d",
  storageBucket: "mealstogo-5af3d.appspot.com",
  messagingSenderId: "101642309011",
  appId: "1:101642309011:web:52944dafa3809b325f2c66",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
};


export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

      
      return (
        <>
          <ThemeProvider theme={theme}>
            <AuthenticationContextProvider>
              <FavouritesContextProvider>
                <LocationContextProvider>
                  <RestaurantsContextProvider>
                    <Navigation />
                  </RestaurantsContextProvider>
                </LocationContextProvider>
              </FavouritesContextProvider>
            </AuthenticationContextProvider>
          </ThemeProvider>
          <ExpoStatusBar style="auto" />
        </>
      );
}
