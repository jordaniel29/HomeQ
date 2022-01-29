import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function HomeScreen() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUsername(user.email);
      } else {
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Selamat datang {username}</Text>
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
