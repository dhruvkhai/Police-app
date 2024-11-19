import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import OnboardingSwiper from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';


const Onboarding = () => {
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.navigate('(tabs)' as never);
  }
  const handleSkip = () => {
    navigation.navigate('(tabs)' as never);
  }
  return (
    <View style={styles.topContainer}>

      <OnboardingSwiper
        onDone={handleDone}
        onSkip={handleSkip}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('./logo.png')} style={styles.logo} />,
            title: 'Welcome',
            subtitle: 'Log in to continue',
          },
          {
            backgroundColor: '#fff',
            title: 'Login',
            subtitle: 'continue',
            titleStyles: { color: '#000' },
            subTitleStyles: { color: '#000' },
            image: (
              <View>
                <Text style={styles.title}>Login</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#A9A9A9"
                  autoCapitalize="none"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#A9A9A9"
                  secureTextEntry
                  autoCapitalize="none"
                />
                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('(tabs)' as never)}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
                <View style={styles.bottomContainer}>
                  <Text style={styles.bottomText}>Don't have an account? </Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Register' as never)}>
                    <Text style={styles.registerLink}>Register</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          },
          {
            backgroundColor: '#fff',
            title: 'Register',
            subtitle: 'continue',
            titleStyles: { color: '#000' },
            subTitleStyles: { color: '#000' },
            image: (
              <View style={styles.container}>
      <Text style={styles.Rtitle}>Register</Text>

      <TextInput placeholder="Name" style={styles.Rinput} />
      <TextInput placeholder="E-mail" style={styles.Rinput} keyboardType="email-address" />
      <TextInput placeholder="Gender" style={styles.Rinput} />
      <TextInput placeholder="Mobile No." style={styles.Rinput} keyboardType="phone-pad" />
      <TextInput placeholder="Password" style={styles.Rinput} secureTextEntry={true} />
      <TextInput placeholder="Aadhar Card No." style={styles.Rinput} keyboardType="numeric" />
      <TextInput placeholder="Confirm Password" style={styles.Rinput} secureTextEntry={true} />

      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.loginText}>Already Member? Login</Text>
      </TouchableOpacity>
    </View>
    
            )
          }
        ]}
      />
    </View>
  );
}

export default Onboarding;

const styles = StyleSheet.create({

  topContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: '#0782F9',
    width: '80%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    position: 'absolute',
    bottom: 40,
  },
  bottomText: {
    color: 'gray',
    fontWeight: '500',
  },
  registerLink: {
    color: '#0782F9',
    fontWeight: '700',
  },
  logo: {
    width: '100%',
    height: '160%',
    resizeMode: 'contain',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 55,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  text: {
    color: '#757575',
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  Rtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  Rinput: {
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