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
      <View style={styles.headerTopRow}>
        <Avatar.Icon size={60} icon="account" style={styles.avatar} />
        <IconButton icon="cog" onPress={() => {}} color="#fff" />
      </View>

      <Text style={styles.greeting}>Hello, Lucas</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Distance in total: {totalDistance.toFixed(1)} km</Text>
        <Text style={styles.infoText}>Workouts completed: {workoutCount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#8A2BE2',
    padding: 20,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 10,
  },
  headerTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#FF69B4',
  },
  greeting: {
    fontSize: 22,
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 2,
  },
});
