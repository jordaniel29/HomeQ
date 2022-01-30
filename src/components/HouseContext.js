import React, { useState, useEffect, createContext } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

export const HouseContext = createContext();

export const HouseProvider = ({ children }) => {
  const [buyList, setBuyList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [outputList, setOutputList] = useState([]);

  const handleError = (err) => {
    console.warn("Error Status: ", err.message);
    console.warn("Error Message: ", err.response.data);
    ToastAndroid.show(err.response.data.message, 3000);
  };

  const getHouseList = async () => {
    try {
      const dbRef = ref(getDatabase());
      const snapshot1 = await get(child(dbRef, "Buy"));
      const snapshot2 = await get(child(dbRef, "Rent"));
      if (snapshot1.exists()) {
        const temp = snapshot1.val();
        var list = [];
        for (var object in temp) {
          list.push(temp[object]);
        }
        setBuyList(list);
      } else {
        console.log("No data available");
      }
      if (snapshot2.exists()) {
        const temp = snapshot2.val();
        var list = [];
        for (var object in temp) {
          list.push(temp[object]);
        }
        setRentList(list);
        setOutputList([buyList, rentList]);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getHouseList();
  }, []);

  return (
    <HouseContext.Provider value={[outputList, setOutputList]}>
      {children}
    </HouseContext.Provider>
  );
};
