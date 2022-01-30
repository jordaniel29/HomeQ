import React from "react";
import { HouseProvider } from "../components/HouseContext";
import HouseList from "../components/HouseList";

export default function HomeScreen() {
  return (
    <HouseProvider>
      <HouseList />
    </HouseProvider>
  );
}
