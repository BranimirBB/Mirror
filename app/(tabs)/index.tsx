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

          {/* Other buttons */}
          <TouchableOpacity style={[styles.userButton, styles.kidButton]}>
            <Text style={styles.buttonText}>Kid</Text>
          </TouchableOpacity>
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  userButton: {
    width: 90,
    height: 30,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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