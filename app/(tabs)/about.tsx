import { View, Text } from 'react-native'
import React from 'react'

const About=() => {
  return (
    <View  style = {{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      }}>
      <Text style = {{
        fontSize:32
      }}
      >About</Text>
    </View>
  );
};

export default About;