import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavBar from './NavBar';

const EventCard = ({ title, location, date, image }) => {
  return (
    <TouchableOpacity style={styles.eventCard}>
      <Image source={{ uri: image }} style={styles.eventImage} />
      <View style={styles.eventDetails}>
        <Text style={styles.eventTitle}>{title}</Text>
        <Text style={styles.eventLocation}>{location}</Text>
        <Text style={styles.eventDate}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SearchPage = ({ navigation }) => {
  const events = [
    {
      id: 1,
      title: 'Concert de rock',
      location: 'Paris',
      date: '14 Juin 2023',
      image: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 2,
      title: 'Match de football',
      location: 'Londres',
      date: '19 Juillet 2023',
      image: 'https://picsum.photos/id/238/200/300',
    },
    {
      id: 3,
      title: 'Festival de musique',
      location: 'Berlin',
      date: '27 Août 2023',
      image: 'https://picsum.photos/id/239/200/300',
    },
  ];

  const handleSearch = () => {
    // Ajouter ici la logique de recherche
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Rechercher un événement"
          style={styles.searchInput}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.eventsContainer}>
        {events.map((event) => (
          <EventCard key={event.id} title={event.title} location={event.location} date={event.date} image={event.image} />
        ))}
      </ScrollView>
      <NavBar navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#ffd700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
  eventsContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  eventCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  eventImage: {
    width: '100%',
    height: 150,
  },
  eventDetails: {
    padding: 10,
  }
});

export default SearchPage;
