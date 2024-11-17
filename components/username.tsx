
import { View } from 'react-native';
import { username } from '../Register'; // Adjust the path as necessary

const DrawerComponent = () => {
    return (
        <View>
            <Text>Welcome, {username}!</Text> {/* Displaying the username */}
            {/* ... other drawer items ... */}
        </View>
    );          
};