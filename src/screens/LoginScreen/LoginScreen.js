import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView,StatusBar } from "react-native";
import Color from '../../constants/Color';
import { FONTS } from "../../enums/StyleGuide";
import { SVG } from "../../assets";
import { useNavigation } from '@react-navigation/native';
const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();
return (
   
      <ScrollView style={styles.container}>

  <View style={styles.headerContainer}>
 <TouchableOpacity onPress={() => navigation.goBack()}>
          <SVG.vector width={22} height={22} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Log In</Text>
      </View>

      
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome</Text>
        <Text style={styles.welcomeText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      
      <View style={styles.formSection}>
        <Text style={styles.inputLabel}>Email or Mobile Number</Text>
        <TextInput
          style={styles.input}
          placeholder="example@example.com"
          placeholderTextColor="#9BB3F8"
        />

        <Text style={[styles.inputLabel,{marginTop:15}]}>Password</Text>
      <View style={styles.passwordContainer}>
  <TextInput
    style={[styles.input, { flex: 1 }]}
    placeholder="************"
    placeholderTextColor="#9BB3F8"
    secureTextEntry={!passwordVisible}
  />
    <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
    <SVG.eye width={22} height={22} />
  </TouchableOpacity>
    </View>

        </View>

        <TouchableOpacity>
          <Text style={styles.forgetPassword}>Forget Password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or sign up with</Text>

        
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialIcon}>
            <SVG.Google width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            < SVG.facebook width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialIcon}>
            <SVG.finger width={24} height={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.signUpContainer}>
          <Text>Don’t have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:Color.text,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
   headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  arrowWrapper: {
    width: 40,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  headerTitle: {
    fontFamily:FONTS.SemiBold,
    fontSize:34,
    fontWeight: "600",
    color:Color.primary,
    textAlign: "center",
    flex: 1,
  },
  rightSpacer: {
    width: 40,
  },
  welcomeSection: {
    marginBottom: 25,
  },
  welcomeTitle: {
    fontFamily:FONTS.SemiBold,
    fontSize: 24,
    fontWeight: "700",
    color:Color.primary,
    marginBottom: 6,
    lineHeight:24,
    verticalAlign:"middle"
  },
  welcomeText: {
    marginTop:10,
    fontFamily:FONTS.LIGHT,
    fontSize: 12,
    color: "#444",
    lineHeight:12,
    letterSpacing:0
  },
  formSection: {
    marginTop: 10,
  },
  inputLabel: {
    fontFamily:FONTS.MEDIUM,
    fontSize:20,
    lineHeight:20,
    fontWeight: "600",
    marginBottom:15,
    color:Color.dark,
  },
  input: {
    backgroundColor:"#EAF0FF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 14,
    color: "#000"
    
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF0FF",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    fontSize: 18,
    marginHorizontal: 5,
  },
  forgetPassword: {
    alignSelf: "flex-end",
    fontStyle:FONTS.MEDIUM,
    color:Color.primary,
    fontSize: 12,
    marginBottom: 25,
    lineHeight:12,
    marginTop:10
  },
loginButton: {
  backgroundColor: Color.primary,
  borderRadius: 25,
  height: 45,          
  width: 200,          
  alignItems: "center",
  justifyContent: "center", 
  marginBottom: 15,
  paddingHorizontal: 20, 
  alignSelf:"center"  
},


  loginButtonText: {
    color:Color.light,
    fontSize: 24,
    fontWeight: "600",

  },
  orText: {
    textAlign: "center",
    color:Color.dark,
    marginBottom: 15,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
  },
  socialIcon: {
    backgroundColor: "#EAF0FF",
    borderRadius: 50,
    padding: 12,
    marginHorizontal: 8,
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    color:Color.primary,
    fontWeight: "600",
  },
});
