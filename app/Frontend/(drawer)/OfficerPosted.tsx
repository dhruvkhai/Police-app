import { View, Text, TextInput, Button } from 'react-native'; // Added TextInput and Button
import React, { useState } from 'react'; // Added useState

// Define the Officer interface
interface Officer {
  name: string; // Add other properties as needed
}

const OfficerPosted = () => {
  const [district, setDistrict] = useState(''); // State for district
  const [officers, setOfficers] = useState<Officer[]>([]); // State for officers list

  const handleSearch = () => {
    // Fetch officers based on the selected district
    // Example API call (replace with actual API)
    fetch(`https://api.example.com/officers?district=${district}`)
      .then(response => response.json())
      .then(data => setOfficers(data))
      .catch(error => console.error('Error fetching officers:', error));
  };

  const handleChangeDistrict = () => {
    //setDistrict(''); // Clear the district input
    // Optionally, you can also reload the page or reset the state
     window.location.reload(); // Uncomment to reload the page
  };

  return (
    <View>
      <Text>OfficerPosted</Text>
      <TextInput
        placeholder="Enter District"
        value={district}
        onChangeText={setDistrict} // Update district state
      />
      <Button title="Search" onPress={handleSearch} /> {/* Search button */}
      <Button title="Change District" onPress={handleChangeDistrict} /> {/* Change District button */}
      {/* Display the list of officers */}
      {officers.map((officer, index) => (
        <Text key={index}>{officer.name}</Text> // Display officer names
      ))}
    </View>
  );
};

export default OfficerPosted;
