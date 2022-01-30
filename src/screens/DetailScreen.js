import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DetailScreen({ route, navigation }) {
  const { id, type } = route.params;
  const [item, setItem] = useState([]);

  const handleError = (err) => {
    console.warn("Error Status: ", err.message);
    console.warn("Error Message: ", err.response.data);
    ToastAndroid.show(err.response.data.message, 3000);
  };

  const purchase = async () => {
    const db = getFirestore();
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;

    try {
      const docRef = await addDoc(collection(db, "cart"), { ...item, uid });
      Alert.alert("Purchase Success");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getItem = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, type + "/house" + id));
      if (snapshot.exists()) {
        const temp = snapshot.val();
        setItem(temp);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getItem();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: item.image,
          }}
          style={styles.image}
        />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.location}>{item.city}</Text>
      <Text style={styles.subTitle}>Specifications</Text>
      <View style={styles.detailContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="bed" size={24} color="black" />
          <Text style={styles.iconText}>{item.bedroom}</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="toilet" size={24} color="black" />
          <Text style={styles.iconText}>{item.toilet}</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="home-analytics"
            size={30}
            color="black"
          />
          <Text style={styles.iconText}>{item.area} m2</Text>
        </View>
      </View>
      <Text style={styles.subTitle}>Description</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <View style={styles.bottom}>
        <Text style={styles.harga}>
          Rp
          {item.price <= 1000
            ? " " + item.price + "Jt"
            : " " + item.price / 1000 + "M"}
        </Text>
        <TouchableOpacity
          style={styles.purchaseBtn}
          onPress={() => {
            purchase();
          }}
        >
          <Text style={styles.purchaseTxt}>{type}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F4F4",
  },
  imgContainer: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: 350,
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 27,
    marginLeft: 15,
    marginTop: 10,
    color: "black",
  },
  location: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    color: "#58626B",
  },
  subTitle: {
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 5,
    color: "black",
  },
  detailContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 70,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  desc: {
    fontSize: 15,
    marginHorizontal: 15,
    color: "#58626B",
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    height: 70,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  harga: {
    fontWeight: "bold",
    fontSize: 25,
    color: "black",
  },
  purchaseBtn: {
    backgroundColor: "#3585C6",
    width: 150,
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
  },
  purchaseTxt: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});
