// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

export default function Header({ workouts }) {
  // Calculate total distance
  const totalDistance = workouts.reduce((sum, w) => sum + parseFloat(w.distance || 0), 0);
  // Count total workouts
  const workoutCount = workouts.length;

  return (
    <View style={styles.headerContainer}>
      <Avatar.Icon size={60} icon="account" style={styles.avatar} />
      <Text style={styles.greeting}>Hello, Lucas</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Distance in total: {totalDistance} km</Text>
        <Text style={styles.infoText}>Workouts completed: {workoutCount}</Text>
      </View>
      <IconButton icon="cog" onPress={() => {}} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#8A2BE2',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: '#FF69B4',
  },
  greeting: {
    fontSize: 20,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 2,
  },
});
