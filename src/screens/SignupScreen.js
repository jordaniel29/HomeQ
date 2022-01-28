import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        <Image style={styles.image} source={require("../assets/house.png")} />
        <Text style={styles.title}>Let's Get Started</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person" size={25} color="black" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Nama Lengkap"
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="email"
            size={25}
            color="black"
            style={styles.icon}
          />
          <TextInput style={styles.textInput} placeholder="Email"></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Entypo name="key" size={25} color="black" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <View style={styles.rowContainer}>
          <Text style={styles.descText}>Already have an account? </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 1000,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  image: {
    width: 250,
    height: 200,
    marginTop: 50,
  },
  rowContainer: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 20,
  },
  title: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
  },
  icon: { padding: 13 },
  textInput: {
    width: 280,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    color: "black",
    fontSize: 15,
  },
  registerButton: {
    width: 330,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#58626B",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 5,
  },
  buttonText: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  loginText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#3585C6",
  },
  descText: {
    fontFamily: "Roboto",
    fontSize: 18,
    fontWeight: "bold",
    color: "#58626B",
  },
});
