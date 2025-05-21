import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

interface RideCardProps {
  customerName: string;
  date: string;
  pickupLocation: string;
  dropLocation: string;
  status: string;
}

const screenWidth = Dimensions.get('window').width;

const RideCard: React.FC<RideCardProps> = ({
  customerName,
  date,
  pickupLocation,
  dropLocation,
  status,
}) => {
  const statusColor = status === 'Completed' ? 'green' : 'red';

  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <Text style={styles.name}>{customerName}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.location}>From: {pickupLocation}</Text>
        <Text style={styles.location}>To: {dropLocation}</Text>
      </View>
      <View style={styles.right}>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth - 32, // Assuming 16 padding on both sides in parent
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    alignSelf: 'center', // ensures it's centered in the list
  },
  left: {
    flex: 1,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    minWidth: 80,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    fontSize: 13,
    color: '#888',
  },
  location: {
    fontSize: 13,
    color: '#444',
  },
  status: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default RideCard;
