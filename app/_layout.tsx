import React from "react";
import { Stack } from "expo-router"


const RootLayout = () => {
  return (
    <Stack screenOptions={{headerShown: false}}>
     
      <Stack.Screen name="onboarding" options={{headerShown: false}} />
      
      <Stack.Screen name="signup" options={{headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="(drawer) " options={{headerShown: false}}/>
      <Stack.Screen name="+not-found" />
    </Stack>
  );
};

export default RootLayout;