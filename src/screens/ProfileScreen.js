import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { doc, onSnapshot } from "firebase/firestore";
import { getFirestore, collection, query, where } from "firebase/firestore";

export default function ProfileScreen() {
  const auth = getAuth();
  const user = auth.currentUser;
  const [transaction, setTransaction] = useState("");
  const [spent, setSpent] = useState("");

  const updateData = async () => {
    const db = getFirestore();
    const uid = user.uid;
    const q = query(collection(db, "cart"), where("uid", "==", uid));

    const unsub = onSnapshot(q, (collection) => {
      let totalSpent = 0;
      let countTrans = 0;
      collection.forEach((doc) => {
        totalSpent += doc.data().price;
        countTrans += 1;
      });
      setTransaction(countTrans);
      setSpent(totalSpent);
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert("Registration Failed!", errorMessage);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentTop}>
        <Ionicons name="person-circle-sharp" size={140} color="black" />
        <View>
          <Text style={styles.name}>{user.displayName}</Text>
          <Text style={styles.point}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.topContent}>
        <View style={styles.numTransactionContainer}>
          <Text style={styles.number}>
            {transaction == 0 ? 0 : transaction}
          </Text>
          <Text style={styles.desc}>Transactions</Text>
        </View>
        <View style={styles.numTransactionContainer}>
          <Text style={styles.number}>
            {spent == 0 ? 0 : ""}
            {spent <= 1000 ? spent + "Jt" : spent / 1000 + "M"}
          </Text>
          <Text style={styles.desc}>Total Spent</Text>
        </View>
      </View>
      <View style={styles.contentBottom}>
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
  topContent: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  numTransactionContainer: {
    width: "48%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  number: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3585C6",
    marginBottom: 5,
  },
  desc: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3585C6",
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
