import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUpPage = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Ajouter le code pour la création d'un compte utilisateur ici
    navigation.navigate('homePage');
  };
  const handleSignIn = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.cloud}>
        <View style={styles.gradient} />
      </View>
      <Image source={require('../image/logo_kioki.png')} style={styles.logo} />
      <Text style={styles.inscriptionLabelText}>Inscription</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Nom complet"
          placeholderTextColor="#003f5c"
        />
      </View>
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirmer le mot de passe"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={styles.loginText}>S'inscrire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignIn}>
        <Text style={styles.signupText}>
          Déjà un compte ? Se connecter 
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
  inscriptionLabelText: {
    top: -100,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  }, 
  inputView: {
    top: -85,
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
  iciText: {
    height: 50,
    color: '#ffd700',
  },
  signupText: {
    top: -85,
  },
  loginBtn: {
    top: -85,
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
});

export default SignUpPage;