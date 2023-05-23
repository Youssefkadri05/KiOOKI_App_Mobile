import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import SignUpPage from './SignUpPage';
import HomePage from '../pages/HomePage';

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajouter le code pour la validation de la connexion ici
    navigation.navigate('homePage');
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cloud}>
        <View style={styles.gradient} />
      </View>
      <Image source={require('../image/logo_kioki.png')} style={styles.logo} />
      <Text style={styles.loginLabelText}>Connexion</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Mot de passe"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupText}>
          Pas de compte ? S'inscrire 
            <Text style={styles.iciText}> ici.</Text>
        </Text>
      </TouchableOpacity>
      <View style={styles.cloudBasDroite}>
        <View style={styles.gradient} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: -80,
  },
  cloud: {
    position: 'absolute',
    top: '3%',
    left: '-50%',
    width: '70%',
    height: '30%',
    borderRadius: 300,
    
  },
  cloudBasDroite: {
    position: 'absolute',
    top: '80%',
    left: '80%',
    width: '70%',
    height: '30%',
    borderRadius: 300,
    
  },
  gradient: {
    flex: 1,
    borderRadius: 300,
    borderWidth: 0.5,
    borderColor: 'black',
    backgroundColor: '#ffd700',
  },
  loginLabelText: {
    top: -100,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },  
  inputView: {
    top: -100,
    marginTop: 10,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    height: 50,
    marginBottom: 10,
    justifyContent: 'center',
    padding: 20,
    borderWidth: 0.5,
    borderColor: 'black',
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    top: -100,
    width: '80%',
    backgroundColor: '#ffd700',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    zIndex: 1
  },
  loginText: {
    color: 'black',
  },
  iciText: {
    color: '#ffd700',
  },
  signupText: {
    top: -100,
    color: '#003f5c',
    marginTop: 10,
  },
});

export default LoginPage;
