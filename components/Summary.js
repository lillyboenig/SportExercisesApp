// components/Summary.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

export default function Summary({ workouts }) {
  const totalBySport = workouts.reduce((acc, workout) => {
    const dist = parseFloat(workout.distance) || 0;
    acc[workout.sport] = (acc[workout.sport] || 0) + dist;
    return acc;
  }, {});

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text style={styles.title}>Distance By Sport</Text>
        {Object.keys(totalBySport).map((sport) => (
          <Text key={sport} style={styles.sportText}>
            {sport}: {totalBySport[sport].toFixed(1)} km
          </Text>
        ))}
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
  sportText: {
    fontSize: 16,
    marginVertical: 2,
  },
});
