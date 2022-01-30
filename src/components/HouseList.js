import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { HouseContext } from "./HouseContext";

export default function HouseList({ navigation }) {
  const [outputList] = useContext(HouseContext);
  const [buyList] = [outputList[0]];
  const [rentList] = [outputList[1]];
  const [activeBtn, setActiveBtn] = useState("Buy");

  return (
    <View style={styles.container}>
      <View style={styles.topButton}>
        <TouchableOpacity
          style={
            activeBtn == "Buy" ? styles.btnBuyActive : styles.btnBuyInactive
          }
          onPress={() => {
            setActiveBtn("Buy");
          }}
        >
          <Text
            style={
              activeBtn == "Buy" ? styles.txtSelected : styles.txtNotSelected
            }
          >
            Buy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            activeBtn == "Rent" ? styles.btnRentActive : styles.btnRentInactive
          }
          onPress={() => {
            setActiveBtn("Rent");
          }}
        >
          <Text
            style={
              activeBtn == "Rent" ? styles.txtSelected : styles.txtNotSelected
            }
          >
            Rent
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={activeBtn == "Buy" ? buyList : rentList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.touchableContainer}
              onPress={() => {
                navigation.push("Detail");
              }}
            >
              <View style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.judul}>{item.name}</Text>
                <View style={styles.bottom}>
                  <Ionicons name="location" size={18} color="#58626B" />
                  <Text style={styles.lokasi}>{item.city}</Text>
                </View>
                <Text style={styles.harga}>
                  Rp
                  {item.price <= 1000
                    ? " " + item.price + "Jt"
                    : " " + item.price / 1000 + "M"}
                  {activeBtn == "Rent" ? "/Tahun" : ""}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4",
  },
  topButton: {
    margin: 20,
    marginTop: 50,
    flexDirection: "row",
  },
  btnBuyActive: {
    backgroundColor: "#3585C6",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnBuyInactive: {
    backgroundColor: "white",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  btnRentActive: {
    backgroundColor: "#3585C6",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  btnRentInactive: {
    backgroundColor: "white",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  txtSelected: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  txtNotSelected: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
  touchableContainer: {
    margin: 10,
    backgroundColor: "#F4F4F4",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemContainer: {
    borderRadius: 10,
    paddingBottom: 10,
    width: 170,
    backgroundColor: "white",
  },
  judul: {
    fontSize: 16,
    paddingHorizontal: 5,
  },
  image: {
    width: 170,
    height: 100,
    resizeMode: "stretch",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  bottom: {
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 8,
  },
  lokasi: {
    color: "#58626B",
    fontSize: 14,
  },
  harga: {
    fontWeight: "bold",
    fontSize: 14,
    paddingHorizontal: 5,
  },
});
