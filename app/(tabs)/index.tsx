import { StyleSheet, View, TextInput, Image, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import AntDesign for the left arrow icon
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function HomeScreen() {
  const navigation = useNavigation(); // Get the navigation object

  return (
    <ImageBackground
      source={require('@/assets/images/page1bg.png')}  // Path to your background image
      style={styles.backgroundImage}
    >
      <TouchableOpacity 
        style={styles.goBackButton} 
        onPress={() => navigation.navigate('startpage')} // Navigate to StartPage
      >
        <AntDesign name="arrowleft" size={24} color="#0E1230" /> {/* Left arrow icon with updated color */}
      </TouchableOpacity>

      <View style={styles.container}>
        {/* Grouping Image 1 (email.png) and Text Input 1 */}
        <View style={styles.inputGroup}>
          <Image
            source={require('@/assets/images/Email_.png')}  // Path to email.png image
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            placeholder="husband_email@gmail.com"
          />
        </View>
        
        {/* Grouping Image 2 (name.png) and Text Input 2 */}
        <View style={styles.inputGroup}>
          <Image
            source={require('@/assets/images/Name_.png')}  // Path to name.png image
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Mr. Husband"
          />
        </View>

        {/* Grouping Image 3 (language.png) and Text Input for language */}
        <View style={styles.inputGroup}>
          <Image
            source={require('@/assets/images/Language_.png')}  // Path to language.png image
            style={styles.image}
          />
          <TextInput
            style={styles.textInput}
            placeholder="English"
          />
        </View>
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
    backgroundColor: '#42FFC9',  // Set the background color
    justifyContent: 'center',  // Center the icon vertically
    alignItems: 'center',  // Center the icon horizontally
  },
  container: {
    flex: 1,  // Fill the screen
    justifyContent: 'flex-start',  // Align items vertically at the top
    marginTop: 220,
    marginLeft: 5,
    alignItems: 'flex-start',  // Align items horizontally to the left
    width: '100%',  // Ensures the content takes the full width
  },
  inputGroup: {
    marginBottom: 15,  // Adds 20px space between input groups
    width: '100%',  // Makes sure the group takes up full width
  },
  image: {
    marginBottom: 12,  // Adds space between the image and the text input
    marginTop: 12,
  },
  textInput: {
    width: 300,  // Set a fixed width for the text input
    height: 40,  // Set the height of the text input field
    borderColor: '#ccc',  // Border color for the text input
    borderWidth: 1,  // Border width for the text input
    borderRadius: 5,  // Rounded corners for the text input
    paddingLeft: 10,  // Padding inside the text input
  },
});