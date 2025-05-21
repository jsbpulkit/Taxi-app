import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, SafeAreaView } from 'react-native';
import RideCard from '../components/RideCard';
import rideData from '../data/data.json';

type Ride = {
  id: string;
  customerName: string;
  date: string;
  pickupLocation: string;
  dropLocation: string;
  status: string;
};

const History = () => {
const [rides, setRides] =useState<Ride[]>([]);

useEffect(() => {
setRides(rideData);
}, []);

return (
<SafeAreaView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16, backgroundColor: '#f0f0f0' }}>
  <FlatList
    data={rides}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <RideCard
        customerName={item.customerName}
        date={item.date}
        pickupLocation={item.pickupLocation}
        dropLocation={item.dropLocation}
        status={item.status}
      />
    )}
  />
</SafeAreaView>

);
};

export default History;