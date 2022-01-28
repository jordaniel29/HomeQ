import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignupScreen"
          component={SignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainApp = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = focused ? "ios-home" : "ios-home-outline";
        } else if (route.name === "Profile") {
          iconName = focused
            ? "ios-person-circle"
            : "ios-person-circle-outline";
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#3585C6",
      tabBarInactiveTintColor: "#58626B",
    })}
  >
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ headerShown: false }}
    />
  </Tab.Navigator>
);
