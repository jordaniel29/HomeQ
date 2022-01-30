import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HouseProvider } from "../components/HouseContext";
import HouseList from "../components/HouseList";

export default function HomeScreen({ navigation }) {
  return (
    <HouseProvider>
      <HouseList />
    </HouseProvider>
  );
}
