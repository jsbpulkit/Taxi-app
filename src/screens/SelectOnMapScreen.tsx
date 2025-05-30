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

const { width, height } = Dimensions.get('window');

const SelectOnMapScreen = () => {
  const [region, setRegion] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);

  const [selectedLocation, setSelectedLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      const location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const handleMapPress = (event: MapPressEvent) => {
    const { latitude, longitude } = event.nativeEvent.coordinate;
    setSelectedLocation({ latitude, longitude });
  };

  const handleConfirmLocation = () => {
    if (selectedLocation) {
      console.log('Selected Location:', selectedLocation);
      // Optional: Replace with navigation or storage logic
    }
    // No alert or error if no location is selected
  };

  return (
    <View style={styles.container}>
      {region && (
        <MapView
          style={styles.map}
          initialRegion={region}
          onPress={handleMapPress}
          showsUserLocation
        >
          {selectedLocation && (
            <Marker coordinate={selectedLocation} title="Selected Location" />
          )}
        </MapView>
      )}

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
          <Text style={styles.coordText}>Tap anywhere on the map to select a location.</Text>
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
