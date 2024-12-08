import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';  

export default function TabTwoScreen() {
  const [SchoolImage, setSchoolImage] = useState(require('@/assets/images/school.png'));
  const [kidMorningImage, setKidMorningImage] = useState(require('@/assets/images/kid_morning.png'));
  const [colorBlueImage, setColorBlueImage] = useState(require('@/assets/images/color_blue.png'));
  const [kidTimeWeatherImage, setKidTimeWeatherImage] = useState(require('@/assets/images/kid_time.png'));
  const [kidMusicImage, setKidMusicImage] = useState(require('@/assets/images/kid_music.png'));
  const [kidWordsImage, setKidWordsImage] = useState(require('@/assets/images/kid_words.png'));
  const [GratitudeImage, setGratitudeImage] = useState(require('@/assets/images/gratitude_blue.png'));

  const wifeImages = [
    require('@/assets/images/kid_img_voice.png'),
    require('@/assets/images/kid_img_voice1.png'),
    require('@/assets/images/kid_img_voice2.png'),
    require('@/assets/images/kid_img_voice3.png')
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);  

  const [activeButton, setActiveButton] = useState(1); 

  const toggleSchoolImage = () => {
    setSchoolImage(SchoolImage === require('@/assets/images/school.png')
      ? require('@/assets/images/selected_school.png')
      : require('@/assets/images/school.png')
    );
  };

    const toggleKidMorningImage = () => {
      setKidMorningImage(kidMorningImage === require('@/assets/images/kid_morning.png')
        ? require('@/assets/images/selected_kid_morning.png')
        : require('@/assets/images/kid_morning.png')
      );
    };  

    const toggleGratitudeImage = () => {
      setGratitudeImage(GratitudeImage === require('@/assets/images/gratitude_blue.png')
         ? require('@/assets/images/select_gratitude.png')
        : require('@/assets/images/gratitude_blue.png')
       );
    };  

  const toggleColorBlueImage = () => {
    setColorBlueImage(colorBlueImage === require('@/assets/images/color_blue.png')
      ? require('@/assets/images/selected_color_blue.png')
      : require('@/assets/images/color_blue.png')
    );
  };

  const toggleKidTimeWeatherImage = () => {
    setKidTimeWeatherImage(kidTimeWeatherImage === require('@/assets/images/kid_time.png')
      ? require('@/assets/images/selected_kid_time.png')
      : require('@/assets/images/kid_time.png')
    );
  };

  const toggleKidMusicImage = () => {
    setKidMusicImage(kidMusicImage === require('@/assets/images/kid_music.png')
      ? require('@/assets/images/kid_selected_music.png')
      : require('@/assets/images/kid_music.png')
    );
  };

  const toggleKidWordsImage = () => {
    setKidWordsImage(kidWordsImage === require('@/assets/images/kid_words.png')
      ? require('@/assets/images/selected_kid_words.png')
      : require('@/assets/images/kid_words.png')
    );
  };

  const handleLeftArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? wifeImages.length - 1 : prevIndex - 1)); // Loop to the last image
  };

  const handleRightArrowClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === wifeImages.length - 1 ? 0 : prevIndex + 1)); // Loop to the first image
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('@/assets/images/bg_page2.png')}  
        style={styles.backgroundImage}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Image
            source={require('@/assets/images/blue_voice_present.png')}  
            style={styles.imageVoicePreset}
          />
          <View style={styles.carouselContainer}>
            <TouchableOpacity onPress={handleLeftArrowClick} style={styles.arrowButton}>
              <AntDesign name="left" size={50} color="#5AF1FF" />
            </TouchableOpacity>

            <Image source={wifeImages[currentImageIndex]} style={styles.imageVoice} />

            <TouchableOpacity onPress={handleRightArrowClick} style={styles.arrowButton}>
              <AntDesign name="right" size={50} color="#5AF1FF" />
            </TouchableOpacity>
          </View>

          <Image
            source={require('@/assets/images/blue_tone_voice.png')} 
            style={styles.image1}
          />

          <View style={styles.buttonGroup}>
            <View style={styles.button1}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 1 && { backgroundColor: '#5AF1FF', borderColor: '#5AF1FF' }]}
                onPress={() => setActiveButton(1)}
              >
              </TouchableOpacity>
              <Text style={styles.buttonText}>Inspirational masculine voice</Text>
            </View>

            <View style={styles.button2}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 2 && { backgroundColor: '#5AF1FF', borderColor: '#5AF1FF' }]}
                onPress={() => setActiveButton(2)}
              >
              </TouchableOpacity>
              <Text style={styles.buttonText}>Encouraging feminine voice</Text>
            </View>

            <View style={styles.button3}>
              <TouchableOpacity
                style={[styles.circleButton, activeButton === 3 && { backgroundColor: '#5AF1FF', borderColor: '#5AF1FF' }]}
                onPress={() => setActiveButton(3)}
              >
              </TouchableOpacity>
              <Text style={styles.buttonText}>Your own voice</Text>
            </View>
          </View>

          <Image
            source={require('@/assets/images/blue_reminders.png')}  
            style={styles.pickReminders}
          />

          <TouchableOpacity onPress={toggleSchoolImage}>
            <Image
              source={SchoolImage}  
              style={styles.image2}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleGratitudeImage}>
            <Image
              source={GratitudeImage}  
              style={styles.image2}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleKidMorningImage}>
            <Image
              source={kidMorningImage}  
              style={styles.image3}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleColorBlueImage}>
            <Image
              source={colorBlueImage}  
              style={styles.image3}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleKidTimeWeatherImage}>
            <Image
              source={kidTimeWeatherImage}  
              style={styles.image5}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleKidMusicImage}>
            <Image
              source={kidMusicImage}  
              style={styles.image7}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleKidWordsImage}>
            <Image
              source={kidWordsImage}  
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
    flex: 1, 
  },
  carouselContainer: {
    flexDirection: 'row',  
    alignItems: 'center',  
    justifyContent: 'center',  
  },
  arrowButton: {
    margin: 15, 
    marginTop: 40,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1, 
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',  
    alignItems: 'center', 
    paddingBottom: 20,  
  },
  image1: {
    marginBottom: 25,  
    marginTop: 38,
    marginRight: 100,
  },
  imageVoice: {
    marginTop: 25,
    marginRight: 5,
  },
  image2: {
    marginBottom: 18,  
  },
  image3: {
    marginBottom: 18,  
  },
  image5: {
    marginBottom: 18,  
  },
  image6: {
    marginBottom: 18,  
  },
  image7: {
    marginBottom: 18,  
  },
  image9: {
    marginBottom: 18,  
  },
  buttonGroup: {
    alignItems: 'flex-start', 
    marginBottom: 20,  
    marginRight: 50,
  },
  button1: {
    flexDirection: 'row',  
    alignItems: 'center',  
    marginBottom: 20, 
  },
  button2: {
    flexDirection: 'row',
    alignItems: 'center', 
    marginBottom: 20,  
  },
  button3: {
    flexDirection: 'row',  
    alignItems: 'center',  
    marginBottom: 20,  
  },
  imageVoicePreset: {
    marginTop: 95,
    marginRight: 15,
  },
  circleButton: {
    width: 25,  
    height: 25, 
    borderRadius: 25, 
    backgroundColor: 'transparent',  
    borderWidth: 3,  
    borderColor: '#5AF1FF', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginRight: 10,  
  },
  pickReminders: {
    marginTop: 5,
    marginBottom: 25,
    marginRight: 5,
  },
  buttonText: {
    fontSize: 17,  
    color: '#fff',  
    marginTop: 5,  
  },
});