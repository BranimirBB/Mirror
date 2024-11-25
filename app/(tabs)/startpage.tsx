import React from 'react';
import { StyleSheet, ImageBackground, View, Image } from 'react-native';

export default function StartPage() {
  return (
    <ImageBackground
      source={require('@/assets/images/page1bg.png')}  // Path to your background image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Select User Image */}
        <Image
          source={require('@/assets/images/selectUser.png')}  // Path to selectUser.png
          style={styles.selectUserImage}
        />

        {/* Image Grid for Users */}
        <View style={styles.imgGridUsers}>
          <Image
            source={require('@/assets/images/husband.png')}  // Path to husband.png
            style={styles.userImage}
          />
          <Image
            source={require('@/assets/images/wife.png')}  // Path to wife.png
            style={styles.userImage}
          />
          <Image
            source={require('@/assets/images/kid.png')}  // Path to kid.png
            style={styles.userImage}
          />
          <Image
            source={require('@/assets/images/newUser.png')}  // Path to newUser.png
            style={styles.userImage}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,  // Makes sure the background image covers the full screen
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center',  // Center content horizontally
  },
  container: {
    flex: 1,  // Fill the screen
    alignItems: 'center',  // Center items horizontally
  },
  selectUserImage: {
    marginTop: 500,  // 500px margin top
    marginRight: '55%',  // 10% margin left
  },
  imgGridUsers: {
    flexDirection: 'row',  // Arrange images in a row
    flexWrap: 'wrap',  // Allow wrapping to the next line
    justifyContent: 'center',  // Center the grid
    marginTop: 10,  // 400px margin top
  },
  userImage: {
    margin: 10,  // Space between images
  },
});
