import React from "react";
import SplashScreen from "../screens/SplashScreen/SplashScreen"
import WelcomeScreen from "../screens/WelcomeScreen/WelcomeScreen"
import LoginScreen from "../screens/LoginScreen/LoginScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack=createNativeStackNavigator()

const AppNavigator = () => {
  return (
    
    <Stack.Navigator >
      <Stack.Screen 
        name="Splash" 
        component={SplashScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name="welcome"
      component={WelcomeScreen}
       options={{ headerShown: false }}
       />
    <Stack.Screen name="Login" component={LoginScreen}
    
    options={{ headerShown: false }}/>
 </Stack.Navigator>
    
      )
      }
      export default AppNavigator;