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

  const [distanceFocused, setDistanceFocused] = useState(false);
  const [durationFocused, setDurationFocused] = useState(false);

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

  // Define button styles for sport selection
  const sportButtons = [
    {
      value: 'Cycling',
      label: 'Cycling',
      style: sport === 'Cycling' ? styles.selectedButton : styles.unselectedButton,
      labelStyle: sport === 'Cycling' ? styles.selectedLabel : styles.unselectedLabel,
    },
    {
      value: 'Running',
      label: 'Running',
      style: sport === 'Running' ? styles.selectedButton : styles.unselectedButton,
      labelStyle: sport === 'Running' ? styles.selectedLabel : styles.unselectedLabel,
    },
    {
      value: 'Swimming',
      label: 'Swimming',
      style: sport === 'Swimming' ? styles.selectedButton : styles.unselectedButton,
      labelStyle: sport === 'Swimming' ? styles.selectedLabel : styles.unselectedLabel,
    },
  ];

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>Today's Workout:</Text>
        <SegmentedButtons
          value={sport}
          onValueChange={setSport}
          buttons={sportButtons}
          style={styles.segmentedButtons}
        />

        <View style={styles.inputRow}>
          <TextInput
            mode="outlined"
            label={!distanceFocused ? "Distance (km)" : ""}
            keyboardType="numeric"
            value={distance}
            onChangeText={setDistance}
            onFocus={() => setDistanceFocused(true)}
            onBlur={() => setDistanceFocused(false)}
            style={[styles.input, { marginRight: 5 }]}
            theme={{
                colors: {
                  text: '#000',           // Typed text color
                  primary: '#f06292',      // Outline color when focused
                  placeholder: '#000',     // Label color
                  background: '#fff',      // Keep input background white
                },
            }}
          />
          <TextInput
            mode="outlined"
            label={!durationFocused ? "Duration (min)" : ""}
            keyboardType="numeric"
            value={duration}
            onChangeText={setDuration}
            onFocus={() => setDurationFocused(true)}
            onBlur={() => setDurationFocused(false)}
            style={[styles.input, { marginLeft: 5 }]}
            theme={{
                colors: {
                  text: '#000',           // Typed text color
                  primary: '#f06292',      // Outline color when focused
                  placeholder: '#000',     // Label color
                  background: '#fff',      // Keep input background white
                },
            }}
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
    borderRadius: 40,
    elevation: 3,
    paddingVertical: 20,
    backgroundColor: '#563CCC',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#F7D5B5',
  },
  segmentedButtons: {
    marginBottom: 10,
    alignSelf: 'center',
  },
  selectedButton:{
    backgroundColor: '#f06292',
  },
  unselectedButton:{
    backgroundColor: '#f7d5b5'
  },
  selectedLabel: {
    color:'#fff'
  },
  unselectedLabel: {
    color: '#000'
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
  },
  dateButton: {
    marginBottom: 10,
    alignSelf: 'center',
    backgroundColor: '#F7D5B5',
    textcolor: '#2D2D2D',
  },
  addButton: {
    alignSelf: 'center',
    width: '50%',
    backgroundColor: '#f06292',
  },
});
