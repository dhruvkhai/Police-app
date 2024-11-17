import { View, Text } from 'react-native'
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Drawer } from 'expo-router/drawer';
import PoliceStation from './Screens/AllPoliceStation';
import OfficerList from './Screens/OfficerList';
import OfficerPosted from './Screens/OfficerPosted';

const DrawerRoot = () => {
  return (

        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer>
              <Drawer.Screen name='All Police Station' options={{ drawerLabel: 'All Police Station', title: 'overview'}} component={PoliceStation}/>
              
              <Drawer.Screen name='Officer List' options={{ drawerLabel: 'Officer List', title: 'overview'}} component={OfficerList} />
              <Drawer.Screen name='Officer Posted' options={{ drawerLabel: 'Officer Posted', title: 'overview'}} component={OfficerPosted} />
              </Drawer>
        </GestureHandlerRootView>
  );
}
export default DrawerRoot;