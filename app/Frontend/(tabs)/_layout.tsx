import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
// import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator(); 

const TabRoot = () => {
  return (
    // <NavigationContainer>
      <Tabs screenOptions={{
        tabBarActiveTintColor: 'rgb(202, 5, 103)',
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerShadowVisible: true,
        headerTintColor: '#000000',
        tabBarStyle: {
        backgroundColor: '#fff',}
      }}>
          <Tabs.Screen name='index'  options={{title : "Home ",tabBarIcon: ({ color, focused }) => (
              <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
            }}/>
          
          <Tabs.Screen name='fir'options={{title : "E-Fir", 
            tabBarIcon: ({ color }) => (
              <FontAwesome size={24} name='user-circle-o' color={color}/>)
          }}/>
      </Tabs>
    // </NavigationContainer>
  )
}
export default TabRoot;