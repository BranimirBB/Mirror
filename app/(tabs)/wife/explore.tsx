import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';  // Import AntDesign for the arrow icons

export default function TabTwoScreen() {
  // State to track the selected images
  const [wifeFitnessImage, setWifeFitnessImage] = useState(require('@/assets/images/wife_fitness.png'));
  const [wifeMedicineImage, setWifeMedicineImage] = useState(require('@/assets/images/karaoke.png'));
  const [wifeTimeWeatherImage, setWifeTimeWeatherImage] = useState(require('@/assets/images/wife_time.png')); 
  const [wifeMusicImage, setWifeMusicImage] = useState(require('@/assets/images/wife_music.png'));
  const [wifeCalendarImage, setWifeCalendarImage] = useState(require('@/assets/images/makeup.png'));
  
  const wifeImages = [
    require('@/assets/images/wife_img_voice.png'),
    require('@/assets/images/wife_img_voice1.png'),
    require('@/assets/images/wife_img_voice2.png'),
    require('@/assets/images/wife_img_voice3.png')
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);  // State to track the current image index

  // State to track which button is active
  const [activeButton, setActiveButton] = useState(1);  // Button 1 is active by default

  // Toggle function for wife fitness image
  const toggleWifeFitnessImage = () => {
    setWifeFitnessImage(wifeFitnessImage === require('@/assets/images/wife_fitness.png') 
      ? require('@/assets/images/wife_selected_fitness.png') 
      : require('@/assets/images/wife_fitness.png')
    );
  };

  // Toggle function for wife medicine image
  const toggleWifeMedicineImage = () => {
    setWifeMedicineImage(wifeMedicineImage === require('@/assets/images/karaoke.png') 
      ? require('@/assets/images/selected_karaoke.png') 
      : require('@/assets/images/karaoke.png')
    );
  };

  // Toggle function for wife time_weather image
  const toggleWifeTimeWeatherImage = () => {
    setWifeTimeWeatherImage(wifeTimeWeatherImage === require('@/assets/images/wife_time.png') 
      ? require('@/assets/images/selected_wife_time.png') 
      : require('@/assets/images/wife_time.png')
    );
  };

  // Toggle function for wife music image
  const toggleWifeMusicImage = () => {
    setWifeMusicImage(wifeMusicImage === require('@/assets/images/wife_music.png') 
      ? require('@/assets/images/wife_selected_music.png') 
      : require('@/assets/images/wife_music.png')
    );
  };

  // Toggle function for wife calendar image
  const toggleWifeCalendarImage = () => {
    setWifeCalendarImage(wifeCalendarImage === require('@/assets/images/makeup.png') 
      ? require('@/assets/images/selected_makeup.png') 
      : require('@/assets/images/makeup.png')
    );
  };

  // Functions to toggle the img_of_voice image
  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? wifeImages.length - 1 : prevIndex - 1)); // Loop to the last image
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === wifeImages.length - 1 ? 0 : prevIndex + 1)); // Loop to the first image
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
          {/* Image 1: wife_voice_presentation.png */}
          <Image
            source={require('@/assets/images/wife_voice_presentation_.png')}  // Path to the first image
            style={styles.imageVoicePreset}
          />
          {/* New Carousel with Left and Right Arrows */}
          <View style={styles.carouselContainer}>
            {/* Left Arrow */}
            <TouchableOpacity onPress={handleLeftArrowClick} style={styles.arrowButton}>
              <AntDesign name="left" size={50} color="#FF58DB" />
            </TouchableOpacity>

            {/* Current Voice Image */}
            <Image source={wifeImages[currentImageIndex]} style={styles.imageVoice} />

            {/* Right Arrow */}
            <TouchableOpacity onPress={handleRightArrowClick} style={styles.arrowButton}>
              <AntDesign name="right" size={50} color="#FF58DB" />
            </TouchableOpacity>
          </View>

          {/* Image 2: wife_tone_of_voice.png */}
          <Image
            source={require('@/assets/images/wife_tone_of_voice.png')}  // Path to the first image
            style={styles.image1}
          />

          {/* Button Group: buttonGroup */}
          <View style={styles.buttonGroup}>
            {/* Button 1 Group: button-1 */}
            <View style={styles.button1}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 1 && { backgroundColor: '#FF58DB', borderColor: '#FF58DB' }]}
                onPress={() => setActiveButton(1)}
              >
                {/* Button content */}
              </TouchableOpacity>
              <Text style={styles.buttonText}>Inspirational masculine voice</Text>
            </View>

            {/* Button 2 Group: button-2 */}
            <View style={styles.button2}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 2 && { backgroundColor: '#FF58DB', borderColor: '#FF58DB' }]}
                onPress={() => setActiveButton(2)}
              >
                {/* Button content */}
              </TouchableOpacity>
              <Text style={styles.buttonText}>Encouraging feminine voice</Text>
            </View>

            {/* Button 3 Group: button-3 */}
            <View style={styles.button3}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 3 && { backgroundColor: '#FF58DB', borderColor: '#FF58DB' }]}
                onPress={() => setActiveButton(3)}
              >
                {/* Button content */}
              </TouchableOpacity>
              <Text style={styles.buttonText}>Your own voice</Text>
            </View>
          </View>

          {/* Image Text: pick your reminders */}
          <Image
            source={require('@/assets/images/wife_reminders.png')}  // Path to the first image
            style={styles.pickReminders}
          />

          {/* Image 2: wife_fitness.png, clickable to toggle */}
          <TouchableOpacity onPress={toggleWifeFitnessImage}>
            <Image
              source={wifeFitnessImage}  // This will toggle between fitness.png and selected_fitness.png
              style={styles.image2}
            />
          </TouchableOpacity>

          {/* Image 3: wife_medicine.png, clickable to toggle */}
          <TouchableOpacity onPress={toggleWifeMedicineImage}>
            <Image
              source={wifeMedicineImage}  // This will toggle between medicine.png and selected_medicine.png
              style={styles.image3}
            />
          </TouchableOpacity>

          {/* Image 5: wife_time_weather.png, clickable to toggle */}
          <TouchableOpacity onPress={toggleWifeTimeWeatherImage}>
            <Image
              source={wifeTimeWeatherImage}  // This will toggle between time_weather.png and selected_time_weather.png
              style={styles.image5}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleWifeMusicImage}>
            <Image
              source={wifeMusicImage}  // This will toggle between music.png and selected_music.png
              style={styles.image7}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleWifeCalendarImage}>
            <Image
              source={wifeCalendarImage}  // This will toggle between calendar.png and selected_calendar.png
              style={styles.image9}
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
  image5: {
    marginBottom: 18,  // Adds space between the third and fourth images
  },
  image6: {
    marginBottom: 18,  // Adds space between the third and fourth images
  },
  image7: {
    marginBottom: 18,  // Adds space between the third and fourth images
  },
  image9: {
    marginBottom: 18,  // Adds space between the third and fourth images
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
    borderColor: '#FF58DB',  // White border color
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