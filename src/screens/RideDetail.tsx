import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

interface RideDetailProps {
  riderName: string;
  fromLocation: string;
  toLocation: string;
  status: 'Completed' | 'Cancelled';
  dateTime: string;
}

const RideDetail: React.FC = () => {
  const ride: RideDetailProps = {
    riderName: 'John Doe',
    fromLocation: '123 Main St, New York',
    toLocation: '456 Park Ave, Chicago',
    status: 'Completed',
    dateTime: '2025-05-20 14:30',
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.heading}>Ride Details</Text>

          <View style={styles.row}>
            <Text style={styles.label}>Rider Name:</Text>
            <Text style={styles.value}>{ride.riderName}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>From:</Text>
            <Text style={styles.value}>{ride.fromLocation}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>To:</Text>
            <Text style={styles.value}>{ride.toLocation}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Status:</Text>
            <Text
              style={[
                styles.value,
                ride.status === 'Completed' ? styles.completed : styles.cancelled,
              ]}
            >
              {ride.status}
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Date & Time:</Text>
            <Text style={styles.value}>{ride.dateTime}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff', // FULLSCREEN BACKGROUND COLOR
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight ?? 0 : 0,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#222',
  },
  row: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 17,
    color: '#111',
    fontWeight: '500',
  },
  completed: {
    color: 'green',
  },
  cancelled: {
    color: 'red',
  },
});

export default RideDetail;
