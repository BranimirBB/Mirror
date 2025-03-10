import React, { useEffect, useRef, useState } from 'react';
import PhotoPreviewSection from '@/components/PhotoPreviewSection';
import { AntDesign } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { Audio } from 'expo-av';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);
  const sound = useRef(new Audio.Sound());
  const [isPlaying, setIsPlaying] = useState(false);

  // State variables for date and time
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const date = new Date();
      const dateOptions: Intl.DateTimeFormatOptions = { 
        month: 'short', 
        day: 'numeric', 
        timeZone: 'Europe/Berlin' 
      };
      const timeOptions: Intl.DateTimeFormatOptions = { 
        hour: '2-digit', 
        minute: '2-digit', 
        timeZone: 'Europe/Berlin', 
        hour12: false 
      };
  
      // Now the TypeScript will not complain
      setCurrentDate(date.toLocaleDateString('en-US', dateOptions));
      setCurrentTime(date.toLocaleTimeString('en-US', timeOptions).slice(0, 5));
    };
  
    updateDateTime(); // Initial call to set the date and time immediately
    const interval = setInterval(updateDateTime, 60000); // Update every minute
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  const handleTakePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        quality: 1,
        base64: true,
        exif: false,
      };
      const takedPhoto = await cameraRef.current.takePictureAsync(options);
      setPhoto(takedPhoto);
    }
  };

  const handleRetakePhoto = () => setPhoto(null);

  const handleGratitudePress = () => {
    Speech.speak("I'm grateful for my body. I'm grateful for my family. I'm grateful for my life");
  };

  const handleWordPress = () => {
    Speech.speak("Spanish word of the day: Buenos dieas. Which means good day!");
  };

  const handleMotivationPress = () => {
    Speech.speak("Yes, you can do it!");
  };

  const handleSchoolPress = () => {
    Speech.speak("Today you have Mathematics, Chemistry, Literature and sports.");
  };

  const handleMusicPress = async () => {
    try {
      if (isPlaying) {
        await sound.current.stopAsync();
        setIsPlaying(false);
      } else {
        if (sound.current) {
          await sound.current.unloadAsync();
        }
        
        await sound.current.loadAsync(require('@/assets/audio/mysong.mp3'));
        await sound.current.playAsync();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Error loading or playing sound:", error);
    }
  };

  if (photo) return <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />;

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        {/* Add the image above the buttons */}
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={handleSchoolPress}>
            <Image
              source={require('@/assets/images/blue_school.png')}  
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleGratitudePress}>
            <Image
              source={require('@/assets/images/gratitude.png')} 
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleMotivationPress}>
            <Image
              source={require('@/assets/images/blue_motivation.png')}  
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleWordPress}>
            <Image
              source={require('@/assets/images/word_blue.png')}  
              style={styles.image}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleMusicPress}>
            <Image
              source={require('@/assets/images/blue_music.png')} 
              style={styles.image}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>{currentDate}</Text>
          <Text style={styles.weatherText2}>{currentTime}</Text>
        </View>

        {/* Button container positioned at bottom-right */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
          </TouchableOpacity>
        </View>

        {/* Add the new image below the buttons */}
        <Image
          source={require('@/assets/images/blue_time.png')}  // Path to the new image
          style={styles.bottomImage}  // Apply styles to position the image below the buttons
        />
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  imageContainer: {
    flexDirection: 'row',  // Align images in a row
    justifyContent: 'center',  // Center the images horizontally
    marginTop: 50,  // Add some space from the top
  },
  weatherContainer: {
    position: 'absolute',  // Position it absolutely
    top: 700,  // Adjust the top position as needed
    left: '5%',  // Center it horizontally
    zIndex: 2,  // Ensure it's above other elements
    alignItems: 'flex-start',  // Align text to the left
  },
  weatherText: {
    fontSize: 18,  // Adjust font size as needed
    color: '#5AF1FF',  // Change color to fit your design
    marginBottom: 2,  // Space between lines
  },
  weatherText2: {
    fontSize: 18,  // Adjust font size as needed
    color: 'white',  // Change color to fit your design
    marginBottom: 5,  // Space between lines
  },
  buttonContainer: {
    position: 'absolute',  // Absolute positioning
    bottom: 10,  // 20px from the bottom
    right: 10,  // 20px from the right
    flexDirection: 'column',  // Stack the buttons vertically
    alignItems: 'center',  // Center the buttons horizontally
    zIndex: 1,  // Ensure the buttons are above other elements
  },
  button: {
    marginVertical: 10,  // Adds space between buttons
    backgroundColor: '#5AF1FF',
    borderRadius: 10,
    padding: 10,
    width: 45,  // Set a smaller width for the button
    height: 30,  // Set a smaller height for the button
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    marginHorizontal: 10,  // Adds space between the images
    width: 50,  // Set a fixed width for the images
    height: 50,  // Set a fixed height for the images
  },
  bottomImage: {
    left: '25%',  // Horizontally center the image
    marginTop: 600,
    zIndex: 1,  // Ensure it's above the camera view
  },
});