// components/ThankYouScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const ThankYouScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/formBG4.jpg')}>
        <View style={styles.innerContainer}>
        <Image
            source={require('../assets/3dsphere.png')} // Change this to your image path
            style={styles.image}
          />
          <Text style={styles.title}>Thank You!</Text>
          <Text style={styles.message}>Your submission has been received.</Text>
        
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Lexend_400Regular',
  },
  message: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
    marginBottom: 50,
  },
});

export default ThankYouScreen;
