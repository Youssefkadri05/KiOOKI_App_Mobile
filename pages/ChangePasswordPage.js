import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import NavBar from './NavBar';

const ChangePasswordPage = ({ navigation }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleSubmit = () => {
    // Ajouter ici la logique de mise à jour du mot de passe
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
       
      
       <TouchableOpacity onPress={handleSubmit}>
         <Text style={styles.saveButton}>Sauvegarder</Text>
       </TouchableOpacity>
     </View>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
          placeholder="Mot de passe actuel"
          placeholderTextColor="#a9a9a9"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          placeholder="Nouveau mot de passe"
          placeholderTextColor="#a9a9a9"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          value={confirmNewPassword}
          onChangeText={(text) => setConfirmNewPassword(text)}
          placeholder="Confirmer le nouveau mot de passe"
          placeholderTextColor="#a9a9a9"
          secureTextEntry={true}
        />
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
  footer: {
    top: 500,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  saveButton: {
    color: '#007aff',
    fontWeight: 'bold',
    fontSize: 20,
    right: -260,
  },
});

export default ChangePasswordPage;
