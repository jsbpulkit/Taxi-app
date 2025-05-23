import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import rides from '../data/mockRides.json';

interface Ride {
  id: string;
  dateTime: string;
  dropLocation: string;
  status: string;
}

const screenWidth = Dimensions.get('window').width;

const CustomerHistory: React.FC = () => {
  const handleCardPress = (id: string) => {
    console.log(`Card pressed. ID: ${id}`);
  };

  const renderItem = ({ item }: { item: Ride }) => (
    <TouchableOpacity onPress={() => handleCardPress(item.id)} activeOpacity={0.7}>
      <View style={styles.card}>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
        <Text style={styles.dropLocation}>Drop: {item.dropLocation}</Text>
        <Text style={[styles.status, item.status === 'Completed' ? styles.completed : styles.cancelled]}>
          {item.status}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rides}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  list: {
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    width: screenWidth,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateTime: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropLocation: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 6,
  },
  completed: {
    color: 'green',
  },
  cancelled: {
    color: 'red',
  },
});

export default CustomerHistory;
