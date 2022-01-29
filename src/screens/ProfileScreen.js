import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen() {
  const auth = getAuth();
  const user = auth.currentUser;
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Registration Failed!", errorMessage);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.contentTop}>
        <Ionicons name="person-circle-sharp" size={140} color="black" />
        <View>
          <Text style={styles.name}>{user.displayName}</Text>
          <Text style={styles.point}>0 point</Text>
        </View>
      </View>
      <View style={styles.contentBottom}>
        <TouchableOpacity style={styles.touchable}>
          <FontAwesome name="pencil" size={30} color="#58626B" />
          <Text style={styles.editTxt}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={logout}>
          <MaterialIcons name="logout" size={30} color="#D23F3F" />
          <Text style={styles.logoutTxt}>Logout</Text>
        </TouchableOpacity>
      </View>
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
  contentTop: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  name: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  point: {
    marginLeft: 10,
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#58626B",
  },
  contentBottom: {
    width: "100%",
  },
  editTxt: {
    marginLeft: 15,
    color: "#58626B",
    fontSize: 16,
    fontWeight: "bold",
  },
  touchable: {
    height: 40,
    flexDirection: "row",
    textAlign: "left",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 30,
    marginVertical: 3,
  },
  logoutTxt: {
    marginLeft: 15,
    color: "#D23F3F",
    fontSize: 16,
    fontWeight: "bold",
  },
});
