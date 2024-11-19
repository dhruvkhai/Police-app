import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer as ExpoDrawer } from 'expo-router/drawer';
// import HomeScreen from '../Screens/HomeScreen';
// import OnboardingScreen from '../Screens/OnboardingScreen';
// import SearchOfficer from '../Screens/SearchOfficer';

import OfficerList from '../(drawer)/OfficerList';
import AllPoliceStation from '../(drawer)/AllPoliceStation';
import index from '../(tabs)/index';
import OfficerPosted from '../(drawer)/OfficerPosted';
import SearchOfficer from '../(tabs)/SearchOfficer';
import Emergency from '../(tabs)/Emergency';
import NearbyPoliceStation from '../(tabs)/NearbyPoliceStation';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// const TabNavigator = () => {
//   return (
//     // <Tab.Navigator>
//     //   <Tab.Screen name="Home" component={HomeScreen} />
//     //   <Tab.Screen name="Emergency" component={Emergency} />
//     //   <Tab.Screen name="Search Officer" component={SearchOfficer} />
//     //   <Tab.Screen name="NearbyPoliceStation" component={NearbyPoliceStation} />
//     // </Tab.Navigator>
//   );
// };

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Home" component={index} />
      <Tab.Screen name="Emergency" component={Emergency} />
      <Tab.Screen name="Search Officer" component={SearchOfficer} />
      <Tab.Screen name="NearbyPoliceStation" component={NearbyPoliceStation} />
    </Tab.Navigator>

      <GestureHandlerRootView style={{flex: 1}}>
            
      <Drawer.Navigator initialRouteName="Onboarding">
              <Drawer.Screen 
                name='All Police Station' 
                component={AllPoliceStation}
                options={{ drawerLabel: 'All Police Station', title: 'overview'}} 
              />
              <Drawer.Screen 
                name='Officer List' 
                component={OfficerList}
                options={{ drawerLabel: 'Officer List', title: 'overview'}}  
              />
              <Drawer.Screen 
                name='Officer Posted' 
                component={OfficerPosted}
                options={{ drawerLabel: 'Officer Posted', title: 'overview'}}  
              />
              
      </Drawer.Navigator>
        </GestureHandlerRootView>
    </NavigationContainer>
  );
};

export default AppNavigator;