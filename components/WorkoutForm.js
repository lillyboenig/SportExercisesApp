// components/WorkoutForm.js
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  TextInput,
  Button,
  RadioButton,
  Text,
} from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';

export default function WorkoutForm({ onAddWorkout }) {
  const [sport, setSport] = useState('Running');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [date, setDate] = useState(undefined);
  const [open, setOpen] = useState(false);

  // Called when user confirms a date in the DatePickerModal
  const onConfirm = (params) => {
    setOpen(false);
    if (params.date) {
      setDate(params.date);
    }
  };

  const handleAddWorkout = () => {
    if (!distance || !duration || !date) {
      // Simple validation check
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

    // Reset fields
    setSport('Running');
    setDistance('');
    setDuration('');
    setDate(undefined);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Workout</Text>

      <RadioButton.Group
        onValueChange={(value) => setSport(value)}
        value={sport}
      >
        <View style={styles.radioRow}>
          <View style={styles.radioItem}>
            <RadioButton value="Cycling" />
            <Text>Cycling</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="Running" />
            <Text>Running</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="Swimming" />
            <Text>Swimming</Text>
          </View>
        </View>
      </RadioButton.Group>

      <TextInput
        label="Distance (km)"
        keyboardType="numeric"
        value={distance}
        onChangeText={setDistance}
        style={styles.input}
      />

      <TextInput
        label="Duration (min)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
        style={styles.input}
      />

      {/* Button to open date picker */}
      <Button
        mode="outlined"
        onPress={() => setOpen(true)}
        style={styles.dateButton}
      >
        {date ? date.toLocaleDateString() : 'Select Date'}
      </Button>

      {/* The actual date picker modal */}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
  },
  dateButton: {
    marginBottom: 10,
  },
  addButton: {
    alignSelf: 'center',
    width: '50%',
  },
});
