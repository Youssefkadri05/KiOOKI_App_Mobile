import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import NavBar from './NavBar';

const EditProfilePage = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = () => {
    // Ajouter ici la logique de mise à jour des informations personnelles
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
      
        <TouchableOpacity onPress={handleSubmit}>
          <Text style={styles.saveButton}>Sauvegarder</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <AntDesign name="user" size={20} color="#a9a9a9" />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Nom complet"
            placeholderTextColor="#a9a9a9"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="mail" size={20} color="#a9a9a9" />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Adresse email"
            placeholderTextColor="#a9a9a9"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="phone" size={20} color="#a9a9a9" />
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={(text) => setPhone(text)}
            placeholder="Numéro de téléphone"
            placeholderTextColor="#a9a9a9"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="home" size={20} color="#a9a9a9" />
          <TextInput
            style={styles.input}
            value={city}
            onChangeText={(text) => setCity(text)}
            placeholder="Ville"
            placeholderTextColor="#a9a9a9"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="enviromento" size={20} color="#a9a9a9" />
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={(text) => setAddress(text)}
            placeholder="Adresse"
            placeholderTextColor="#a9a9a9"
          />
        </View>
        <View style={styles.inputContainer}>
          <AntDesign name="earth" size={20} color="#a9a9a9" />
          <TextInput
            style={styles.input}
            value={country}
            onChangeText={(text) => setCountry(text)}
            placeholder="Pays"
            placeholderTextColor="#a9a9a9"
          />
        </View>
      </View>
      <View style={styles.footer}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffd700',
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    saveButton: {
      color: '#007aff',
      fontWeight: 'bold',
      fontSize: 20,
      right: -260,
    },
    content: {
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#a9a9a9',
      marginVertical: 10,
      paddingVertical: 8,
      fontSize: 16,
    },
    icon: {
      marginRight: 10,
    },
    footer: {
        top: 185,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        backgroundColor: '#fff',
      },
  });
  


export default EditProfilePage;
