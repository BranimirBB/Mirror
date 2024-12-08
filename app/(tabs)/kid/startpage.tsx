import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, ImageBackground, TouchableOpacity, Text, Modal, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for the left arrow icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function HomeScreen() {
  const navigation = useNavigation(); // Get the navigation object
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // Default language is English
  const [isModalVisible, setIsModalVisible] = useState(false); // Modal visibility state
  const [email, setEmail] = useState('kid_email@gmail.com'); // Default email
  const [name, setName] = useState('The name'); // Default name

  const languages = ['English', 'Bulgarian', 'Dutch']; // Language options

  // Handle when a language is selected
  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsModalVisible(false); // Close the modal after selecting
  };

  return (
    <ImageBackground
      source={require('@/assets/images/kidBG.png')}  // Path to your background image
      style={styles.backgroundImage}
    >
      <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => navigation.navigate('(tabs)/index' as never)} // Fix the type error by casting it as never
      >
        <AntDesign name="arrowleft" size={24} color="#0E1230" /> {/* Left arrow icon with updated color */}
      </TouchableOpacity>

      <View style={styles.container}>
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Email:</Text>
          {/* TextInput with default value */}
          <TextInput
            style={styles.textInput}
            value={email} // Bind state to value
            onChangeText={setEmail} // Update state on change
          />
        </View>
        
        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Name:</Text>
          {/* TextInput with default value */}
          <TextInput
            style={styles.textInput}
            value={name} // Bind state to value
            onChangeText={setName} // Update state on change
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.labelText}>Language:</Text>
          {/* TextInput to display selected language */}
          <TouchableOpacity onPress={() => setIsModalVisible(true)} style={styles.textInputContainer}>
            <Text style={styles.dropDowntextInput}>{selectedLanguage}</Text> {/* Display selected language */}
          </TouchableOpacity>
        </View>

        {/* Modal for the dropdown options */}
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setIsModalVisible(false)} // Close modal when clicking outside
          >
            <View style={styles.modalContent}>
              <FlatList
                data={languages}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.modalOption}
                    onPress={() => handleLanguageSelect(item)}
                  >
                    <Text style={styles.modalOptionText}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,  // Makes sure the background image covers the full screen
    justifyContent: 'flex-start',  // Align content to the top of the screen
    alignItems: 'flex-start',  // Align content to the left side of the screen
    paddingTop: 220,  // Adds 200px margin from the top
    paddingLeft: 40,  // Adds 40px margin from the left
  },
  goBackButton: {
    position: 'absolute',  // Position it absolutely
    top: 60,  // Adjust the top position as needed
    left: 20,  // Adjust the left position as needed
    width: 35,  // Set the width of the button
    height: 35,  // Set the height of the button
    borderRadius: 20,  // Make it circular
    backgroundColor: '#5AF1FF',  // Set the background color
    justifyContent: 'center',  // Center the icon vertically
    alignItems: 'center',  // Center the icon horizontally
  },
  labelText: {
    marginRight: '45%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  container: {
    flex: 1,  // Fill the screen
    justifyContent: 'flex-start',  // Align items vertically at the top
    marginTop: 222,
    marginLeft: 5,
    alignItems: 'flex-start',  // Align items horizontally to the left
    width: '100%',  // Ensures the content takes the full width
  },
  inputGroup: {
    marginBottom: 25,  // Adds 20px space between input groups
    width: '100%',  // Makes sure the group takes up full width
  },
  textInputContainer: {
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: '#DCFCFFFF',
    padding: 10,
    width: '40%',
  },
  textInput: {
    fontSize: 18,
    color: '#DCFCFFFF',
    borderWidth: 0.5,
    borderColor: '#DCFCFFFF',
    padding: 10,
    borderRadius: 5,
    width: '80%',
  },
  dropDowntextInput: {
    fontSize: 18,
    color: '#DCFCFFFF',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)', // Dark background
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: 200,
    maxHeight: 300,
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
  },
  modalOptionText: {
    fontSize: 15,
    color: '#333',
  },
});