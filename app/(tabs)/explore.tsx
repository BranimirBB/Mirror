import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';  // Import AntDesign for the arrow icons

export default function TabTwoScreen() {
  // State to track the selected images
  const [fitnessImage, setFitnessImage] = useState(require('@/assets/images/fitness.png'));
  const [medicineImage, setMedicineImage] = useState(require('@/assets/images/medicine.png'));
  const [morningImage, setMorningImage] = useState(require('@/assets/images/morning.png'));
  const [imgVoice, setImgVoice] = useState(require('@/assets/images/img_of_voice.png'));  // State for voice image
  const images = [
    require('@/assets/images/img_of_voice.png'),
    require('@/assets/images/img_of_voice1.png'),
    require('@/assets/images/img_of_voice2.png'),
    require('@/assets/images/img_of_voice3.png')
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // State to track the current image index

  // State to track which button is active
  const [activeButton, setActiveButton] = useState(1);  // Button 1 is active by default

  // Toggle function for fitness image
  const toggleFitnessImage = () => {
    setFitnessImage(fitnessImage === require('@/assets/images/fitness.png') 
      ? require('@/assets/images/selected_fitness.png') 
      : require('@/assets/images/fitness.png')
    );
  };

  // Toggle function for medicine image
  const toggleMedicineImage = () => {
    setMedicineImage(medicineImage === require('@/assets/images/medicine.png') 
      ? require('@/assets/images/selected_medicine.png') 
      : require('@/assets/images/medicine.png')
    );
  };

  // Toggle function for morning image
  const toggleMorningImage = () => {
    setMorningImage(morningImage === require('@/assets/images/morning.png') 
      ? require('@/assets/images/selected_morning.png') 
      : require('@/assets/images/morning.png')
    );
  };

  // Functions to toggle the img_of_voice image
  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1)); // Loop to the last image
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1)); // Loop to the first image
  };

  return (
    <View style={styles.container}>
      {/* Background Image (fixed) */}
      <ImageBackground
        source={require('@/assets/images/bg_page2.png')}  // Path to your background image
        style={styles.backgroundImage}
      >
        {/* Content ScrollView */}
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Image 1: voice_content.png */}
          <Image
            source={require('@/assets/images/voice_presentation.png')}  // Path to the first image
            style={styles.imageVoicePreset}
          />
          {/* New Carousel with Left and Right Arrows */}
          <View style={styles.carouselContainer}>
            {/* Left Arrow */}
            <TouchableOpacity onPress={handleLeftArrowClick} style={styles.arrowButton}>
              <AntDesign name="left" size={50} color="#42FFC9" />
            </TouchableOpacity>

            {/* Current Voice Image */}
            <Image source={images[currentImageIndex]} style={styles.imageVoice} />

            {/* Right Arrow */}
            <TouchableOpacity onPress={handleRightArrowClick} style={styles.arrowButton}>
              <AntDesign name="right" size={50} color="#42FFC9" />
            </TouchableOpacity>
          </View>

                    {/* Image 1: voice_content.png */}
                    <Image
            source={require('@/assets/images/tone_of_voice.png')}  // Path to the first image
            style={styles.image1}
          />

          {/* Button Group: buttonGroup */}
          <View style={styles.buttonGroup}>
            {/* Button 1 Group: button-1 */}
            <View style={styles.button1}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 1 && { backgroundColor: '#42FFC9', borderColor: '#42FFC9' }]}
                onPress={() => setActiveButton(1)}
              >
                {/* Button content */}
              </TouchableOpacity>
              <Text style={styles.buttonText}>Inspirational masculine voice</Text>
            </View>

            {/* Button 2 Group: button-2 */}
            <View style={styles.button2}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 2 && { backgroundColor: '#42FFC9', borderColor: '#42FFC9' }]}
                onPress={() => setActiveButton(2)}
              >
                {/* Button content */}
              </TouchableOpacity>
              <Text style={styles.buttonText}>Encouraging feminine voice</Text>
            </View>

            {/* Button 3 Group: button-3 */}
            <View style={styles.button3}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 3 && { backgroundColor: '#42FFC9', borderColor: '#42FFC9' }]}
                onPress={() => setActiveButton(3)}
              >
                {/* Button content */}
              </TouchableOpacity>
              <Text style={styles.buttonText}>Your own voice</Text>
            </View>
          </View>

          {/* Image Text: pick your reminders */}
          <Image
            source={require('@/assets/images/reminders.png')}  // Path to the first image
            style={styles.pickReminders}
          />

          {/* Image 2: fitness.png, clickable to toggle */}
          <TouchableOpacity onPress={toggleFitnessImage}>
            <Image
              source={fitnessImage}  // This will toggle between fitness.png and selected_fitness.png
              style={styles.image2}
            />
          </TouchableOpacity>

          {/* Image 3: medicine.png, clickable to toggle */}
          <TouchableOpacity onPress={toggleMedicineImage}>
            <Image
              source={medicineImage}  // This will toggle between medicine.png and selected_medicine.png
              style={styles.image3}
            />
          </TouchableOpacity>

          {/* Image 4: morning.png, clickable to toggle */}
          <TouchableOpacity onPress={toggleMorningImage}>
            <Image
              source={morningImage}  // This will toggle between morning.png and selected_morning.png
              style={styles.image4}
            />
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Ensure the container takes up the full screen
  },
  carouselContainer: {
    flexDirection: 'row',  // Align the left arrow, image, and right arrow in a row
    alignItems: 'center',  // Center items vertically
    justifyContent: 'center',  // Center the items horizontally
    marginLeft: 5,
  },
  arrowButton: {
    margin: 15,  // Space between the image and the arrows
    marginTop: 40,
  },
  backgroundImage: {
    position: 'absolute', // Position the background image absolutely to make it static
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, // Ensure it's behind the content
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',  // Centers content vertically within the ScrollView
    alignItems: 'center',  // Centers content horizontally
    paddingBottom: 20,  // Adds space at the bottom of the content
  },
  image1: {
    marginBottom: 25,  // Adds space between the first and second images
    marginTop: 45,
    marginRight: 100,
  },
  imageVoice: {
    marginTop: 25,
    marginRight: 5,
  },
  image2: {
    marginBottom: 18,  // Adds space between the second and third images
  },
  image3: {
    marginBottom: 18,  // Adds space between the third and fourth images
  },
  image4: {
    // Optionally add styling if needed
  },
  buttonGroup: {
    alignItems: 'flex-start',  // Align buttons to the left within the group
    marginBottom: 20,  // Space between the button group and the next image
    marginRight: 50,
  },
  button1: {
    flexDirection: 'row',  // Place button and text side by side
    alignItems: 'center',  // Align text and button vertically centered
    marginBottom: 20,  // Space between button 1 and button 2
  },
  button2: {
    flexDirection: 'row',  // Place button and text side by side
    alignItems: 'center',  // Align text and button vertically centered
    marginBottom: 20,  // Space between button 2 and button 3
  },
  button3: {
    flexDirection: 'row',  // Place button and text side by side
    alignItems: 'center',  // Align text and button vertically centered
    marginBottom: 20,  // Space between button 3 and next content
  },
  imageVoicePreset: {
    marginTop: 95,
    marginRight: 15,
  },
  circleButton: {
    width: 25,  // Width of the circle button
    height: 25,  // Height of the circle button
    borderRadius: 25,  // Makes it a circle
    backgroundColor: 'transparent',  // Button center is empty
    borderWidth: 3,  // White border around the button
    borderColor: '#42FFC9',  // White border color
    justifyContent: 'center',  // Center the icon inside the circle
    alignItems: 'center',  // Center the icon inside the circle
    marginRight: 10,  // Space between the button and the text
  },
  pickReminders: {
    marginTop: 5,
    marginBottom: 25,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 17,  // Size of the text
    color: '#fff',  // Text color white
    marginTop: 5,  // Space between the button and the text
  },
});