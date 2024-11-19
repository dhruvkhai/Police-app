import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, KeyboardAvoidingView, Platform } from 'react-native';

const FIRPage = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [crimeType, setCrimeType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [report, setReport] = useState('');
  const [suspectDetails, setSuspectDetails] = useState('');
  const [witnessDetails, setWitnessDetails] = useState('');
  const [sectionOfLaw, setSectionOfLaw] = useState('');
  const [evidence, setEvidence] = useState('');
  const [signature, setSignature] = useState('');

  // Validate the date format (YYYY-MM-DD)
  const isValidDate = (date: string): boolean => {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(date);
  };

  const handleSubmit = () => {
    if (
      !name || !contact || !crimeType || !description || !date || !location ||
      !report || !suspectDetails || !witnessDetails || !sectionOfLaw || !evidence || !signature
    ) {
      Alert.alert('Error', 'Please fill in all the fields');
    } else if (!isValidDate(date)) {
      Alert.alert('Error', 'Please enter a valid date in the format YYYY-MM-DD');
    } else {
      // Submit the FIR (for now, we'll just show an alert)
      Alert.alert('Success', 'Your FIR has been filed successfully');
      // Here, you would typically send the data to a backend server
    }
  };

  return (
    <KeyboardAvoidingView 
      style={{ flex: 1 }} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>File e-FIR</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        {/* Contact No Input */}
        <TextInput
          style={styles.input}
          placeholder="Contact No"
          value={contact}
          onChangeText={setContact}
          keyboardType="phone-pad"
        />

        {/* Crime Type Input */}
        <TextInput
          style={styles.input}
          placeholder="Type of Crime"
          value={crimeType}
          onChangeText={setCrimeType}
        />

        {/* Crime Description Input */}
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Crime Description"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
        />

        {/* Date of Incident Input */}
        <TextInput
          style={styles.input}
          placeholder="Date of Incident (YYYY-MM-DD)"
          value={date}
          onChangeText={setDate}
        />

        {/* Location of Incident Input */}
        <TextInput
          style={styles.input}
          placeholder="Location of Incident"
          value={location}
          onChangeText={setLocation}
        />

        {/* Report Incident Input */}
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Report Incident"
          value={report}
          onChangeText={setReport}
          multiline
          numberOfLines={4}
        />

        {/* Suspect Details Input */}
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Suspect Details"
          value={suspectDetails}
          onChangeText={setSuspectDetails}
          multiline
          numberOfLines={4}
        />

        {/* Witness Details Input */}
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Witness Details"
          value={witnessDetails}
          onChangeText={setWitnessDetails}
          multiline
          numberOfLines={4}
        />

        {/* Section of Law Input */}
        <TextInput
          style={styles.input}
          placeholder="Section of Law"
          value={sectionOfLaw}
          onChangeText={setSectionOfLaw}
        />

        {/* Evidence Input */}
        <TextInput
          style={[styles.input, styles.descriptionInput]}
          placeholder="Evidence"
          value={evidence}
          onChangeText={setEvidence}
          multiline
          numberOfLines={4}
        />

        {/* Signature Input */}
        <TextInput
          style={styles.input}
          placeholder="Signature"
          value={signature}
          onChangeText={setSignature}
        />

      </ScrollView>

      {/* Submit Button - Always at the bottom */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit FIR</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f4f4f4', // Light background color
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: 'top', // To align text to the top for multiline inputs
  },
  button: {
    backgroundColor: '#3498db', // Blue background for the submit button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5, // Elevation for Android shadow
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default FIRPage;