import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker, MapPressEvent } from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

// Get the width and height of the device screen
const { width, height } = Dimensions.get('window');

const SelectOnMapScreen = () => {
  // Region state to define the visible map area (initial region)
  const [region, setRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);

  // State to store the coordinates selected by user
  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  // Navigation instance if needed for screen transitions
  const navigation = useNavigation();

  // Request location permission and get user's current location on mount
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01, // How zoomed-in the map is
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  // Handle user tapping on map to select a location
  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  // Handle confirm button press
  const handleConfirmLocation = () => {
    if (selectedLocation) {
      console.log('Selected Location:', selectedLocation);
      // You can navigate or store this location here
    }
    // No alert shown if location is not selected — silent fail
  };

  return (
    <View style={styles.container}>
      {/* Render the map only when region is available */}
      {region && (
        <MapView
          style={styles.map}
          initialRegion={region}
          onPress={handleMapPress}
          showsUserLocation 
        >
          {/* Display marker only if a location is selected */}
          {selectedLocation && (
            <Marker coordinate={selectedLocation} title="Selected Location" />
          )}
        </MapView>
      )}

      {/* Bottom panel to show coordinates and confirm button */}
      <View style={styles.info}>
        {selectedLocation ? (
          <>
            <Text style={styles.coordText}>
              Latitude: {selectedLocation.latitude.toFixed(5)}
            </Text>
            <Text style={styles.coordText}>
              Longitude: {selectedLocation.longitude.toFixed(5)}
            </Text>
          </>
        ) : (
          <Text style={styles.coordText}>
            Tap anywhere on the map to select a location.
          </Text>
        )}
        <TouchableOpacity style={styles.button} onPress={handleConfirmLocation}>
          <Text style={styles.buttonText}>Confirm Location</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectOnMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width,
    height: height * 0.6, 
  },
  info: {
    height: height * 0.4, 
    padding: 16,
    backgroundColor: '#fff',
    elevation: 8, 
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    justifyContent: 'center',
  },
  coordText: {
    fontSize: 16,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
