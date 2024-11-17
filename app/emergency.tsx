import { View, Text, TouchableOpacity, Linking, StyleSheet, Alert, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'

interface EmergencyContact {
  service: string
  number: string
  icon: keyof typeof Ionicons.glyphMap
}

const emergencyContacts: EmergencyContact[] = [
  { service: 'Police', number: '100', icon: 'shield-checkmark' },
  { service: 'Ambulance', number: '102', icon: 'medical' },
  { service: 'Fire Station', number: '108', icon: 'flame' },
]

const Emergency = () => {
  const handleCall = async (contact: EmergencyContact) => {
    const phoneNumber = contact.number
    try {
      if (Platform.OS === 'android') {
        await Linking.openURL(`tel:${phoneNumber}`)
      } else {
        Alert.alert(
          `Call ${contact.service}?`,
          `Are you sure you want to call ${phoneNumber}?`,
          [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Call', onPress: () => Linking.openURL(`tel:${phoneNumber}`) }
          ]
        )
      }
    } catch (error) {
      Alert.alert('Error', 'Could not make the call. Please try again.')
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Emergency Contacts</Text>
        <Text style={styles.subHeaderText}>Tap to call immediately</Text>
      </View>

      <View style={styles.buttonContainer}>
        {emergencyContacts.map((contact, index) => (
          <TouchableOpacity 
            key={index}
            style={styles.button} 
            onPress={() => handleCall(contact)}
            activeOpacity={0.7}
          >
            <Ionicons name={contact.icon} size={32} color="white" />
            <View style={styles.buttonTextContainer}>
              <Text style={styles.serviceText}>{contact.service}</Text>
              <Text style={styles.numberText}>{contact.number}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.disclaimer}>
        In case of emergency, please call these numbers only for genuine purposes
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    marginTop: 40,
    marginBottom: 30,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  buttonContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: '#FF4444',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonTextContainer: {
    marginLeft: 15,
  },
  serviceText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  numberText: {
    color: 'white',
    fontSize: 16,
    opacity: 0.9,
  },
  disclaimer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
  },
})

export default Emergency