import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
  {
    name: 'Musique',
    icon: 'musical-notes',
  },
  {
    name: 'Sport',
    icon: 'basketball',
  },
];

const events = [
  {
    name: 'Concert de jazz',
    category: 'Musique',
    date: '12 avril 2023',
    time: '20:00',
    location: 'Salle de concert XYZ',
  },
  {
    name: 'Match de football',
    category: 'Sport',
    date: '15 avril 2023',
    time: '19:30',
    location: 'Stade ABC',
  },
];

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const filteredEvents = selectedCategory === 'Tous' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <View >
      <Text style={styles.title}>Catégories</Text>
      <View style={styles.categoryList}>
        {['Tous', ...categories.map(category => category.name)].map((categoryName, index) => (
          <TouchableOpacity key={index} style={styles.category} onPress={() => setSelectedCategory(categoryName)}>
            <Ionicons name={categories.find(category => category.name === categoryName)?.icon || 'information-circle-outline'} size={24} color={selectedCategory === categoryName ? 'blue' : 'gray'} />
            <Text style={styles.categoryName}>{categoryName}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>Événements</Text>
      <View style={styles.eventList}>
        {filteredEvents.map((event, index) => (
          <View key={index} style={styles.event}>
            <Text style={styles.eventName}>{event.name}</Text>
            <Text style={styles.eventDetails}>{event.date} à {event.time} - {event.location}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    color: '#333',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  categoryName: {
    marginLeft: 5,
  },
  eventList: {
    marginTop: 10,
  },
  event: {
    backgroundColor: '#fffacd',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDetails: {
    fontSize: 16,
  },
});

export default Categories;
