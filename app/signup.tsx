import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput placeholder="Name" style={styles.input} />
      <TextInput placeholder="E-mail" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Gender" style={styles.input} />
      <TextInput placeholder="Mobile No." style={styles.input} keyboardType="phone-pad" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry={true} />
      <TextInput placeholder="Aadhar Card No." style={styles.input} keyboardType="numeric" />
      <TextInput placeholder="Confirm Password" style={styles.input} secureTextEntry={true} />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Already Member? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#007BFF',
    fontSize: 16,
  },
});

export default HomePage;