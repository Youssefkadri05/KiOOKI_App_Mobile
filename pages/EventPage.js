import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { Calendar } from 'react-native-calendars';

const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    { id: 1, title: 'Event 1', date: '2023-05-10', coordinate: { latitude: 48.8534, longitude: 2.3488 } },
    { id: 2, title: 'Event 2', date: '2023-05-12', coordinate: { latitude: 48.8566, longitude: 2.3522 } },
    { id: 3, title: 'Event 3', date: '2023-05-15', coordinate: { latitude: 48.8606, longitude: 2.3376 } },
    { id: 4, title: 'Event 4', date: '2023-05-18', coordinate: { latitude: 48.8647, longitude: 2.3412 } },
    { id: 5, title: 'Event 5', date: '2023-05-20', coordinate: { latitude: 48.8688, longitude: 2.3432 } },
  ];

  const handleEventPress = (event) => {
    setSelectedEvent(event);
  };

  const renderMarkers = () => {
    return events.map((event) => (
      <Marker key={event.id} coordinate={event.coordinate} title={event.title} onPress={() => handleEventPress(event)} />
    ));
  };

  return (
    <View style={styles.container}>
      <Calendar
        markedDates={{
          [selectedEvent?.date]: { selected: true, marked: true, selectedColor: '#ffd700' },
        }}
      />
      <ScrollView contentContainerStyle={styles.cardContainer}>
        {events.map((event) => (
          <Card key={event.id} containerStyle={styles.card}>
            <View style={styles.cardDetails}>
              <Text style={styles.cardTitle}>{event.title}</Text>
              <Text style={styles.cardDate}>{event.date}</Text>
            </View>
            <Button
              icon={<Icon name='info' color='#ffffff' />}
              buttonStyle={styles.cardButton}
              title='Détails'
              onPress={() => handleEventPress(event)}
            />
          </Card>
        ))}
      </ScrollView>
      {selectedEvent && (
        <View style={styles.eventDetails}>
          <Text style={styles.eventDetailsTitle}>{selectedEvent.title}</Text>
          <Text style={styles.eventDetailsDate}>{selectedEvent.date}</Text>
          <Button
            title="Fermer"
            buttonStyle={styles.eventDetailsCloseButton}
            onPress={() => setSelectedEvent(null)}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  cardContainer: {
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
    padding: 0,
  },
  cardDetails: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 16,
    color: '#aaa',
  },
  cardButton: {
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
    backgroundColor: '#ffd700',
  },
  eventDetails: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventDetailsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  eventDetailsDate: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 20,
  },
  eventDetailsCloseButton: {
    borderRadius: 50,
    backgroundColor: '#ff0000',
  },
});

export default EventPage;
