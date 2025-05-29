import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';

const { width } = Dimensions.get('window');

const DriverProfile = () => {

    // mock data
    const customer = {
    photoUrl: 'https://i.pravatar.cc/300',
    email: 'example@gmail.com',
    mobile: '1234567890',
    gender: 'Male',
    city: 'jaipur',
    age:'25',
    totalRides: 20,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Profile Header */}
        <View style={styles.header}>
          <Image source={{ uri: customer.photoUrl }} style={styles.profileImage} />
          <Text style={styles.userName}>{customer.gender === 'Male' ? 'Mr. ' : 'Ms. '}Driver</Text>
        </View>

        {/* Profile Fields */}
        <View style={styles.section}>
          

          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Email</Text>
            <View style={styles.inputMock}>
              <Text style={styles.text}>{customer.email}</Text>
            </View>
          </View>

          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Mobile Number</Text>
            <View style={styles.inputMock}>
              <Text style={styles.text}>{customer.mobile}</Text>
            </View>
          </View>

          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Gender</Text>
            <View style={styles.inputMock}>
              <Text style={styles.text}>{customer.gender}</Text>
            </View>
          </View>

          <View style={styles.fieldBlock}>
            <Text style={styles.label}>City</Text>
            <View style={styles.inputMock}>
              <Text style={styles.text}>{customer.city}</Text>
            </View>
          </View>

          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Age</Text>
            <View style={styles.inputMock}>
              <Text style={styles.text}>{customer.age}</Text>
            </View>
          </View>

          {/* Total Rides Card */}
          <View style={styles.rideCard}>
            <Text style={styles.rideText}>Total Rides</Text>
            <Text style={styles.rideNumber}>{customer.totalRides}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFFFFF',
  },
  profileImage: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: width * 0.2,
    borderWidth: 3,
    borderColor: '#4A90E2',
    backgroundColor: '#eee',
  },
  userName: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4A90E2',
    marginBottom: 16,
  },
  fieldBlock: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    color: '#888',
    marginBottom: 4,
  },
  inputMock: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 15,
    color: '#333',
  },
  rideCard: {
    marginTop: 30,
    backgroundColor: '#f0f4ff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2,
  },
  rideText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A90E2',
    marginBottom: 6,
  },
  rideNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DriverProfile;
