import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/house.png")} />
      <View style={styles.rowContainer}>
        <Ionicons name="home-sharp" size={55} color="black" />
        <Text style={styles.title}>omeQ</Text>
      </View>
      <Text style={styles.subTitle}>Finding a good quality home for you</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate("LoginScreen")}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate("SignupScreen")}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  image: {
    marginTop: 50,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 45,
    fontWeight: "bold",
  },
  subTitle: {
    fontFamily: "Roboto",
    fontSize: 18,
    color: "#58626B",
    marginBottom: 60,
  },
  loginButton: {
    width: 330,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3585C6",
    borderRadius: 10,
    marginVertical: 10,
  },
  registerButton: {
    width: 330,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#58626B",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
