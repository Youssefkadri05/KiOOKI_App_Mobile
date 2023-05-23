import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfilePage = ({ navigation }) => {
  const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    phone: '06 12 34 56 78',
    city: 'Paris',
    address: '12 Rue du Faubourg Saint-Honoré',
    country: 'France',
  };

  return (
    <View style={styles.container}>
     <View style={styles.userInfo}>
  <Feather name="user" size={64} color="#ffd700" />
  <Text style={styles.userName}>{`${user.firstName} ${user.lastName}`}</Text>
</View>

<View style={styles.infoContainer}>
  <View style={styles.infoRow}>
    <MaterialIcons name="email" size={24} color="#000" />
    <Text style={styles.infoText}>{user.email}</Text>
  </View>

  <View style={styles.infoRow}>
    <Feather name="phone" size={24} color="#000" />
    <Text style={styles.infoText}>{user.phone}</Text>
  </View>

  <View style={styles.infoRow}>
    <MaterialIcons name="location-city" size={24} color="#000" />
    <Text style={styles.infoText}>{user.city}</Text>
  </View>

  <View style={styles.infoRow}>
    <MaterialIcons name="location-on" size={24} color="#000" />
    <Text style={styles.infoText}>{user.address}</Text>
  </View>

  <View style={styles.infoRow}>
    <MaterialIcons name="public" size={24} color="#000" />
    <Text style={styles.infoText}>{user.country}</Text>
  </View>
</View>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('editProfilePage')}>
        <Text style={styles.buttonText}>Modifier mon profil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('changePasswordPage')}>
        <Text style={styles.buttonText}>Changer le mot de passe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 30,
  },
  userInfo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  userName: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#ffd700',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
