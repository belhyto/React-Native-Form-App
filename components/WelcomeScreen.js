// components/WelcomeScreen.js
import React, { useCallback, useContext, useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';
import * as SplashScreen from 'expo-splash-screen';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const goToNextScreen = () => {
    navigation.navigate('PersonalDetails');
  };
  const [fontsLoaded] = useFonts({
    Lexend_400Regular
  })
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/formBG4.jpg')}>
        <View style={styles.innerContainer}>
        
          <Image
            source={require('../assets/3dsphere.png')} 
            style={styles.image}
          />
          <Pressable style={styles.nextButton} onPress={goToNextScreen}>
            <Text style={styles.buttonText}>Let's start</Text>
            <Image source={require('../assets/next.png')} style={styles.buttonIcon} />
          </Pressable>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    marginRight: 10,
    fontFamily: 'Lexend_400Regular',
  },
  buttonIcon: {
    width: 50,
    height: 50,
  },
});

export default WelcomeScreen;
