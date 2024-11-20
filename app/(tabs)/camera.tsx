import PhotoPreviewSection from '@/components/PhotoPreviewSection';
import { AntDesign } from '@expo/vector-icons';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Camera() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [photo, setPhoto] = useState<any>(null);
  const cameraRef = useRef<CameraView | null>(null);

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

  if (photo) return <PhotoPreviewSection photo={photo} handleRetakePhoto={handleRetakePhoto} />;

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        {/* Add the image above the buttons */}
        <Image
          source={require('@/assets/images/on_the_mirror.png')}  // Path to the image
          style={styles.image}
        />
        
        {/* Button container positioned at bottom-right */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <AntDesign name="retweet" size={44} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleTakePhoto}>
            <AntDesign name="camera" size={44} color="black" />
          </TouchableOpacity>
        </View>

        {/* Add the new image below the buttons */}
        <Image
          source={require('@/assets/images/time-day.png')}  // Path to the new image
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
  buttonContainer: {
    position: 'absolute',  // Absolute positioning
    bottom: 20,  // 20px from the bottom
    right: 20,  // 20px from the right
    flexDirection: 'column',  // Stack the buttons vertically
    alignItems: 'center',  // Center the buttons horizontally
    zIndex: 1,  // Ensure the buttons are above other elements
  },
  button: {
    marginVertical: 10,  // Adds space between buttons
    backgroundColor: '#42FFC9',
    borderRadius: 10,
    padding: 10,
    width: 50,  // Set a smaller width for the button
    height: 30,  // Set a smaller height for the button
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    position: 'absolute', // Position it absolutely on top of the buttons
    top: 50, // 50px from the top
    left: 120, // Horizontally center the image
    marginLeft: -100, // Offset by half of the image's width to truly center it
    zIndex: 1, // Ensure it's on top of the buttons
  },
  bottomImage: {
    left: '6%',  // Horizontally center the image
    marginTop: 680,
    zIndex: 1,  // Ensure it's above the camera view
  },
});