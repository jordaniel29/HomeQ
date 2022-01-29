import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default function ProfileScreen() {
  const logout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Registration Failed!", errorMessage);
    }
  };
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
