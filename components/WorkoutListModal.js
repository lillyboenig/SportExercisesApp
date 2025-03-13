// components/WorkoutListModal.js
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Modal, Portal, Card, Text, Button } from 'react-native-paper';

export default function WorkoutListModal({ visible, onClose, workouts }) {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onClose}
        contentContainerStyle={styles.modalContainer}
      >
        <Text style={styles.title}>Past Workouts</Text>
        <ScrollView style={styles.scrollArea}>
          {workouts.map((workout, index) => (
            <Card key={index} style={styles.card}>
              <Card.Title title={workout.sport} />
              <Card.Content>
                <Text>Distance: {workout.distance} km</Text>
                <Text>Duration: {workout.duration} min</Text>
                <Text>Date: {workout.date}</Text>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
        <Button onPress={onClose} mode="contained" style={styles.closeButton}>
          Close
        </Button>
      </Modal>
    </Portal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 15,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  scrollArea: {
    maxHeight: 400,
    marginBottom: 10,
  },
  card: {
    marginBottom: 10,
  },
  closeButton: {
    alignSelf: 'center',
    width: '50%',
  },
});
