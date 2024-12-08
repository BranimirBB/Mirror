import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function IndexScreen() {
  const navigation = useNavigation(); // Get the navigation object

  const handleHusbandButtonClick = () => {
    // Navigate to the husband folder (this triggers the tab navigation)
    navigation.reset({
      index: 0,
      routes: [{ name: '(tabs)/husband' as never }], // Type-casting to 'never'
    });
  };

  const handleKidButtonClick = () => {
    // Navigate to the kid folder (this triggers the tab navigation)
    navigation.reset({
      index: 0,
      routes: [{ name: '(tabs)/kid' as never }], // Change this line to navigate to kid
    });
  };
  
  const handleWifeButtonClick = () => {
    // Navigate to the wife folder (this triggers the tab navigation)
    navigation.reset({
      index: 0,
      routes: [{ name: '(tabs)/wife' as never }], // Type-casting to 'never'
    });
  };

  return (
    <ImageBackground
      source={require('@/assets/images/page1bg.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.selectUserText}>Select User</Text>

        <View style={styles.imgGridUsers}>
          {/* Husband Button */}
          <TouchableOpacity
            style={[styles.userButton, styles.husbandButton]}
            onPress={handleHusbandButtonClick} // Trigger navigation to the husband folder
          >
            <Text style={styles.buttonText}>Husband</Text>
          </TouchableOpacity>

          {/* Wife Button */}
          <TouchableOpacity
            style={[styles.userButton, styles.wifeButton]}
            onPress={handleWifeButtonClick} // Trigger navigation to the wife folder
          >
            <Text style={styles.buttonText}>Wife</Text>
          </TouchableOpacity>

          {/* Kid Button */}
          <TouchableOpacity
            style={[styles.userButton, styles.kidButton]}
            onPress={handleKidButtonClick} // Trigger navigation to the kid folder
          >
            <Text style={styles.buttonText}>Kid</Text>
          </TouchableOpacity>

          {/* New User Button */}
          <TouchableOpacity style={[styles.userButton, styles.newuserButton]}>
            <Text style={styles.buttonText}>New User</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  selectUserText: {
    marginTop: 500,
    marginRight: '45%',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  imgGridUsers: {
    flexDirection: 'row',  // Arrange the buttons horizontally
    flexWrap: 'wrap',  // Allow wrapping to the next line
    justifyContent: 'center',  // Center the buttons
    marginTop: 10,
    width: '90%', // Limit the width of the grid for better alignment
  },
  userButton: {
    width: '43%',  // Ensure buttons are 40% of the container width
    height: 40, // Increased button height for better touch area
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,  // Space between buttons
    borderRadius: 5,
    borderWidth: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  },
  husbandButton: {
    backgroundColor: '#32B09B',
    borderColor: '#42FFC9',
  },
  wifeButton: {
    backgroundColor: '#7F73A5',
    borderColor: '#FF58DB',
  },
  kidButton: {
    backgroundColor: '#36A4A8',
    borderColor: '#5AF1FF',
  },
  newuserButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
  },
});