// components/MapView.js
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const MapViewComponent = () => {
  const [region, setRegion] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        fetchNearbyPoliceStations(latitude, longitude);
      },
      (error) => {
        console.error(error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  const fetchNearbyPoliceStations = async (latitude, longitude) => {
    const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY'; // Replace with your API key
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=police&key=${apiKey}`
    );
    const data = await response.json();
    setPoliceStations(data.results);
  };

  if (!region) {
    return null; // or a loading indicator
  }

  return (
    <MapView style={styles.map} region={region}>
      {policeStations.map((station) => (
        <Marker
          key={station.place_id}
          coordinate={{
            latitude: station.geometry.location.lat,
            longitude: station.geometry.location.lng,
          }}
          title={station.name}
        />
      ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '50%',
  },
});

export default MapViewComponent;