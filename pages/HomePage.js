import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Categories from './Categories';
import NavBar from './NavBar';

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenue sur Kioki</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Les derniers événements :</Text>
        <Categories />
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
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: '#ffd700',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    flex: 1,
    left: 15,
    top: 40,
    
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
});

export default HomePage;
