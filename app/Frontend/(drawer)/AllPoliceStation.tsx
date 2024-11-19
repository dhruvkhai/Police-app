import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

interface PoliceStation {
  id: number; // or string, depending on your API
  name: string;
}

const AllPoliceStation = () => {
  const [stations, setStations] = useState<PoliceStation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await fetch('https://api.example.com/police-stations'); // Replace with your API endpoint
        const data = await response.json();
        setStations(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchStations();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <FlatList
      data={stations}
      keyExtractor={(item) => item.id.toString()} // Assuming each station has a unique 'id'
      renderItem={({ item }) => (
        <View style={styles.stationItem}>
          <Text>{item.name}</Text> {/* Assuming each station has a 'name' property */}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  stationItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AllPoliceStation;