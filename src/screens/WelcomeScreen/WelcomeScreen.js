import React from "react"; 
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Color from '../../constants/Color';
import { FONTS } from "../../enums/StyleGuide";
import { SVG } from "../../assets";

const WelcomeScreen = ({ navigation }) => {

    const Login = () => {
        navigation.navigate("Login");  
    }

    const SignUp = () => {
        navigation.navigate("SignUp"); 
    }

    return (
        <View style={styles.container}>
            
        <SVG.Group91 style={styles.icon}/>

            <Text style={styles.text}>
                Skin{'\n'}Firts
            </Text>
            <Text style={styles.subtext}>
                Dermatology Center
            </Text>

            <Text style={styles.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={Login} style={[styles.Login, { backgroundColor: Color.primary }]}>
                    <Text style={[styles.LoginText, { color: Color.text }]}>Log In</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={SignUp} style={[styles.Login, { backgroundColor: Color.Signup, marginTop: 10 }]}>
                    <Text style={[styles.LoginText, { color: Color.primary }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        backgroundColor: "#fff"
    },
    icon: {
        width: 138,
        height: 138,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        
    },
    text: {
        fontFamily: FONTS.REGULAR,
        fontWeight: "100",
        fontSize: 48,
        lineHeight: 48,
        letterSpacing: 0,
        color: Color.primary,
        textAlign: "center",
        marginBottom: 5
    },
    subtext: {
        fontFamily: FONTS.BOLD,
        fontWeight: "600",
        fontSize: 12,
        lineHeight: 12,
        letterSpacing: 0,
        color: Color.primary,
        textAlign: "center",
        marginBottom: 20
    },
    description: {
        fontFamily: FONTS.LIGHT,
        fontSize: 12,
        lineHeight: 18,
        color: Color.dark,
        textAlign: "center",
        width: "80%",
        marginBottom: 40
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center"
    },
    Login: {
        borderRadius: 30,
        width: 207,
        height: 45,
        alignItems: "center",
        justifyContent: "center"
    },
    LoginText: {
        fontFamily: FONTS.MEDIUM,
        fontSize: 24,
        fontWeight: "500",
        textAlign: "center"
    }
});
