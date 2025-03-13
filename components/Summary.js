// components/Summary.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Summary({ workouts }) {
  // Calculate total distance by sport
  const totalBySport = workouts.reduce((acc, workout) => {
    const dist = parseFloat(workout.distance) || 0;
    if (!acc[workout.sport]) {
      acc[workout.sport] = 0;
    }
    acc[workout.sport] += dist;
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Distance By Sport</Text>
      {Object.keys(totalBySport).map((sport) => (
        <Text key={sport} style={styles.sportText}>
          {sport}: {totalBySport[sport]} km
        </Text>
      ))}
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
  sportText: {
    fontSize: 16,
    marginVertical: 2,
  },
});
