import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import Emergency from './Emergency';
import NearbyPoliceStation from './NearbyPoliceStation';
import SearchOfficer from './SearchOfficer';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  Emergency: undefined;
  SearchOfficer: undefined;
  NearbyPoliceStation: undefined;
  // ... other screens
};

const index = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={{
      backgroundColor: "rgb(255, 254, 253)",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}>
      <TouchableOpacity
        style={{
          backgroundColor: 'blue',
          padding: 20,
          borderRadius: 50,
          marginTop: 20,
        }}
        onPress={() => { navigation.navigate("SearchOfficer"); }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Search Officer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          padding: 20,
          borderRadius: 50,
          marginTop: 20,
        }}
        onPress={() => { navigation.navigate("NearbyPoliceStation"); }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Nearby Police Station
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 20,
          borderRadius: 50,
          marginTop: 20,
        }}
        onPress={() => { navigation.navigate("Emergency"); }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          EMERGENCY
        </Text>
      </TouchableOpacity>

    </View>
  )
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Emergency" component={Emergency} />
      <Stack.Screen name="NearbyPoliceStation" component={NearbyPoliceStation} />
      <Stack.Screen name="SearchOfficer" component={SearchOfficer} />
    </Stack.Navigator>
  );
};
export default AppNavigator;





