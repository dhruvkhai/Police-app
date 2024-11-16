
import React from 'react'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';


const tabroot = () => {
  return (
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
        <Tabs.Screen name='index'  options={{title : "Home ", tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
          }}/>
        <Tabs.Screen name='about'options={{title : "About us",
        tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}/>
          ),
          }}/>
        <Tabs.Screen name='profile'options={{title : "Profile ", 
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={24} name='user-circle-o' color={color}/>)
        }}/>
    </Tabs>
  )
}
export default tabroot;