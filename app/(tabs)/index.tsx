import React from "react";
import {Text,TouchableOpacity,View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProp } from '@react-navigation/native';
import Emergency from '../emergency';
import { createStackNavigator } from '@react-navigation/stack';

type RootStackParamList = {
  emergency: undefined;
  // ... other screens
};

const index = ( ) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    return (
      <View style = {{backgroundColor: "rgb(255, 254, 253)",
        flex : 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Text>hi i am dhruv</Text>

        <TouchableOpacity 
          style={{
            backgroundColor: 'red',
            padding: 20,
            borderRadius: 50,
            marginTop: 20,
          }}
          onPress={() => {navigation.navigate("emergency");}}>
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
        
        <Stack.Screen name="emergency" component={Emergency} />
      </Stack.Navigator>
    );
  };

  export default AppNavigator;





