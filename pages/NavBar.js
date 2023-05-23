import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NavBar = ({ navigation }) => {
  const handleSearch = () => {
    navigation.navigate('searchPage');
  };

  const handleEvent = () => {
    navigation.navigate('eventPage');
  };

  const handleProfile = () => {
    navigation.navigate('profilePage');
  };

  const handlePublish = () => {
    navigation.navigate('PublishPage');
  };

  const handleCalendar = () => {
    navigation.navigate('calendarPage');
  };

  return (
    <View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('homePage')}>
          <Ionicons name="home" size={24} color="black" />
          <Text style={styles.menuText}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" />
          <Text style={styles.menuText}>Rechercher</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleEvent}>
          <Ionicons name="people" size={24} color="black" />
          <Text style={styles.menuText}>Événements</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleProfile}>
          <Ionicons name="person" size={24} color="black" />
          <Text style={styles.menuText}>Profil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handlePublish}>
          <Ionicons name="add" size={24} color="black" />
          <Text style={styles.menuText}>Publier</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleCalendar}>
          <Ionicons name="calendar-outline" size={24} color="black" />
          <Text style={styles.menuText}>Calendrier</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    backgroundColor: '#ffd700',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default NavBar;
