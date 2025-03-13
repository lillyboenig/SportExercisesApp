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
            <Card key={index} style={styles.workoutBubble}>
              <Card.Content>
                <Text style={styles.sportText}>{workout.sport}</Text>
                <Text style={styles.detailText}>{workout.distance} km</Text>
                <Text style={styles.detailText}>{workout.duration} min</Text>
                <Text style={styles.detailText}>{workout.date}</Text>
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
    borderRadius: 20,
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
  workoutBubble: {
    marginBottom: 10,
    borderRadius: 50, // Large radius for an elliptical shape
    backgroundColor: '#DAB3FF', // Light purple background
    elevation: 2,
  },
  sportText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 14,
    marginTop: 2,
  },
  closeButton: {
    alignSelf: 'center',
    width: '50%',
  },
});
