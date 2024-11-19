import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapViewComponent from './MapView'

const NearbyPoliceStation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearby Police Stations</Text>
      <MapViewComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
})

export default NearbyPoliceStation