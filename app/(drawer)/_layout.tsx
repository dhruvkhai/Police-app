import { View, Text } from 'react-native'
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';


const DrawerRoot = () => {
  return (

        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer>
              <Drawer.Screen name='index' options={{ drawerLabel: 'Home', title: 'overview'}}/>
              <Drawer.Screen name='about' options={{ drawerLabel: 'About', title: 'overview'}}/>
              </Drawer>
        </GestureHandlerRootView>
  );
}
export default DrawerRoot;