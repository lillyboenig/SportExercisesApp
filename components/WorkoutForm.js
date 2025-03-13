// components/WorkoutForm.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  TextInput,
  Button,
  Text,
  SegmentedButtons,
  Card,
} from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

export default function WorkoutForm({ onAddWorkout }) {
  const [sport, setSport] = useState('Running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);

  const onConfirm = (params) => {
    setOpen(false);
    if (params.date) {
      setDate(params.date);
    }
  };

  const handleAddWorkout = () => {
    if (!distance || !duration || !date) {
      alert('Please fill all fields and select a date.');
      return;
    }

    const newWorkout = {
      sport,
      distance,
      duration,
      date: date.toLocaleDateString(),
    };

    onAddWorkout(newWorkout);

    // Reset
    setSport('Running');
    setDistance('');
    setDuration('');
    setDate(undefined);
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>Today's Workout</Text>
        <SegmentedButtons
          value={sport}
          onValueChange={setSport}
          buttons={[
            { value: 'Cycling', label: 'Cycling' },
            { value: 'Running', label: 'Running' },
            { value: 'Swimming', label: 'Swimming' },
          ]}
          style={styles.segmentedButtons}
        />

        <View style={styles.inputRow}>
          <TextInput
            label="Distance (km)"
            keyboardType="numeric"
            value={distance}
            onChangeText={setDistance}
            style={[styles.input, { marginRight: 5 }]}
          />
          <TextInput
            label="Duration (min)"
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
            style={[styles.input, { marginLeft: 5 }]}
          />
        </View>

        <Button
          mode="outlined"
          onPress={() => setOpen(true)}
          style={styles.dateButton}
        >
          {date ? date.toLocaleDateString() : 'Select Date'}
        </Button>

        <DatePickerModal
          locale="en"
          mode="single"
          visible={open}
          onDismiss={() => setOpen(false)}
          date={date}
          onConfirm={onConfirm}
        />

        <Button
          mode="contained"
          onPress={handleAddWorkout}
          style={styles.addButton}
        >
          Add Workout
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  segmentedButtons: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    flex: 1,
  },
  dateButton: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  addButton: {
    alignSelf: 'center',
    width: '50%',
  },
});
