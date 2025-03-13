// App.js
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { theme } from './theme';

// Components
import Header from './components/Header';
import WorkoutForm from './components/WorkoutForm';
import WorkoutListModal from './components/WorkoutListModal';
import Summary from './components/Summary';

export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  const toggleModal = () => {
    setModalVisible((prev) => !prev);
  };

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {/* Header with total distance and workout count */}
        <Header workouts={workouts} />

        {/* Form for adding a new workout */}
        <WorkoutForm onAddWorkout={addWorkout} />

        {/* Summary showing distance by sport type */}
        <Summary workouts={workouts} />

        {/* Button to open/close Past Workouts modal */}
        <Button mode="contained" onPress={toggleModal}>
          Show Past Workouts
        </Button>

        {/* Modal with the scrollable list of workouts */}
        <WorkoutListModal
          visible={modalVisible}
          onClose={toggleModal}
          workouts={workouts}
        />
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingHorizontal: 10,
      paddingTop: 10,
    },
    showPastButton: {
      marginTop: 10,
      alignSelf: 'center',
      width: '60%',
    },
});
