import React,{useEffect} from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native"
import Color from '../../constants/Color'
import {SVG, svgs } from "../../assets"
import { FONTS } from "../../enums/StyleGuide"
const SplashScreen = ({ navigation }) => {
 useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("welcome"); 
    }, 2000);


    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View style={styles.Container}>
  
    <StatusBar hidden={true}/>
      <SVG.Group1 style={styles.icon}/>
        <Text style={styles.text}>
              Skin{'\n'}Firts
            </Text>
            <Text style={styles.subtext}>
              Dermatology Center
            </Text>
     
      </View>

  )
}
export default SplashScreen;
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: "100%",
    height: "90%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.primary

  },
   text: {
    fontFamily: FONTS.REGULAR,
    fontWeight: "100",
    fontSize: 48,
    lineHeight: 48,
    letterSpacing: 0,
    color: Color.text,
    textAlign: "center",
    verticalAlign: "middle",
  },
  subtext: {
    fontFamily: FONTS.BOLD,
    fontWeight: "600",
    fontSize: 12,
    lineHeight: 12,
    letterSpacing: 0,
    color: Color.text,
    textAlign: "center",
    verticalAlign: "middle",
  },
  icon: {
        width: 138,
        height: 138,
  
}
})