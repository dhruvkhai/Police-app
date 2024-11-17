import React from "react";
import { Stack as ExpoStack } from "expo-router"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Register from './Screens/Register'
import Onboarding from './Screens/onboarding'
import drawer from './(drawer)'
import notfound from './+not-found'
import Tabs from './(tabs)'
const RootLayout = () => {
  return (
    <NavigationContainer>
    <ExpoStack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" options={{headerShown: false}} component={Tabs}/>
      <Stack.Screen name="onboarding" options={{headerShown: false}} component={Onboarding} />
      <Stack.Screen name="Register" options={{headerShown: false}} component={Register} />
      <Stack.Screen name="(drawer)" options={{headerShown: false}} component={drawer} />
      <Stack.Screen name="+not-found" component={notfound} />
    </ExpoStack>
    </NavigationContainer>
  );
};

export default RootLayout;