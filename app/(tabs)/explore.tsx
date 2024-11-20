import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function TabTwoScreen() {
  // State to track the selected images
  const [fitnessImage, setFitnessImage] = useState(require('@/assets/images/fitness.png'));
  const [medicineImage, setMedicineImage] = useState(require('@/assets/images/medicine.png'));
  const [morningImage, setMorningImage] = useState(require('@/assets/images/morning.png'));

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

  return (
    <ImageBackground
      source={require('@/assets/images/bg_page2.png')}  // Path to your background image
      style={styles.backgroundImage}
    >
      {/* Image 1: voice_content.png */}
      <Image
        source={require('@/assets/images/voice_content.png')}  // Path to the first image
        style={styles.image1}
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,  // Ensures the background image covers the full screen
    justifyContent: 'center',  // Centers content vertically
    alignItems: 'center',  // Centers content horizontally
  },
  image1: {
    marginBottom: 35,  // Adds space between the first and second images
    marginTop: 45,
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
});