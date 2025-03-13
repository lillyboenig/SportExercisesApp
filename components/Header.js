// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, IconButton } from 'react-native-paper';

export default function Header({ workouts }) {
  // Calculate total distance and count workouts
  const totalDistance = workouts.reduce((sum, w) => sum + parseFloat(w.distance || 0), 0);
  const workoutCount = workouts.length;

  return (
    <View style={styles.headerContainer}>
      {/* Cog icon positioned absolutely */}
      <IconButton 
        icon="cog" 
        onPress={() => {}} 
        color="#fff" 
        style={[styles.cogIcon, styles.settingsButton]} 
      />

      {/* Centered content */}
      <View style={styles.centerContainer}>
        <Avatar.Icon size={60} icon="account" style={styles.avatar} />
        <Text style={styles.greeting}>Hello, Lilly</Text>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Distance in total: {totalDistance.toFixed(1)} km
        </Text>
        <Text style={styles.infoText}>
          Workouts completed: {workoutCount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#563CCC',
    padding: 20,
    marginHorizontal: 10,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 10,
    position: 'relative', // Needed for absolute positioning of the cog icon
  },
  cogIcon: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
  settingsButton: {
    backgroundColor: '#F7D5B5',
    borderRadius: 20,
  },
  centerContainer: {
    alignItems: 'center',
    marginTop: 20, // Space below the cog icon
  },
  avatar: {
    backgroundColor: '#FF69B4',
  },
  greeting: {
    fontSize: 22,
    color: '#F7D5B5',
    marginTop: 10,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  infoText: {
    color: '#F7D5B5',
    fontSize: 16,
    marginVertical: 2,
  },
});
