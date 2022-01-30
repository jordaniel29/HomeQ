import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function DetailScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/homeq-1397b.appspot.com/o/house%2Fhouse1.jpg?alt=media&token=c42cb19e-5db7-40eb-b13e-3d179989db9b",
          }}
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.backBtn}>
        <Ionicons name="arrow-back-sharp" size={25} color="#3585C6" />
      </TouchableOpacity>
      <Text style={styles.name}>NAMA RUMAH</Text>
      <Text style={styles.location}>Jakarta</Text>
      <Text style={styles.subTitle}>Specifications</Text>
      <View style={styles.detailContainer}>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="bed" size={24} color="black" />
          <Text style={styles.iconText}>2</Text>
        </View>
        <View style={styles.iconContainer}>
          <FontAwesome5 name="toilet" size={24} color="black" />
          <Text style={styles.iconText}>1</Text>
        </View>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="home-analytics"
            size={30}
            color="black"
          />
          <Text style={styles.iconText}>40 m2</Text>
        </View>
      </View>
      <Text style={styles.subTitle}>Description</Text>
      <Text style={styles.desc}>
        Jual Murah Rumah Di Balikpapan Kalimantan Timur. Nyaman polll
      </Text>
      <View style={styles.bottom}>
        <Text style={styles.harga}>Rp 200jt</Text>
        <TouchableOpacity style={styles.purchaseBtn}>
          <Text style={styles.purchaseTxt}>Buy</Text>
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
  backBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 30,
    height: 30,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer: {
    width: "100%",
    backgroundColor: "red",
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
