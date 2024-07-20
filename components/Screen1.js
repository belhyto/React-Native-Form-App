import React, { useCallback, useContext, useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Image, StyleSheet, ImageBackground, Alert, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Lexend_400Regular } from '@expo-google-fonts/lexend';
import * as SplashScreen from 'expo-splash-screen';

const PersonalDetailsScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
  });

  const goToNextScreen = () => {
    if (!formData.firstName || !formData.lastName || !formData.gender) {
      Alert.alert('Wait', 'Please fill in all the fields.');
      return;
    }
    navigation.navigate('DateOfBirth');
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
  const titleText = 'Hello';
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/formBG1.jpg')}>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>
            {titleText}
          </Text>
          <Text style={styles.subHeader}> Let's get to know you</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            placeholderTextColor="#0A0A0A"
            value={formData.firstName}
            onChangeText={(value) => setFormData({ ...formData, firstName: value })}
          />
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#0A0A0A"
            value={formData.lastName}
            onChangeText={(value) => setFormData({ ...formData, lastName: value })}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={formData.gender}
              onValueChange={(itemValue) => setFormData({ ...formData, gender: itemValue })}
              style={[
                styles.picker,
                { color: formData.gender === '' ? 'black' : 'white' }
              ]}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="Select Gender" value="" />
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
              <Picker.Item label="Non-Binary" value="non-binary" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </View>
          <Pressable style={styles.nextButton} onPress={goToNextScreen}>
            <Text style={styles.buttonText}>Next</Text>
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
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 12,
    marginVertical: 15,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 247, 247, 0.35)',
    color: 'white',
  },
  pickerContainer: {
    borderWidth: 2,
    borderColor: '#ccc',
    marginVertical: 15,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 247, 247, 0.35)',
  },
  picker: {
    width: '100%',
    height: 50,
    
  },
  pickerItem: {
    color: 'white', // This sets the text color of the items in the Picker for iOS
    borderRadius: 50,
  },
  nextButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    marginTop: 90,
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
  titleText: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 96,
    color: 'white',
  },
  defaultFont: {
    fontFamily: 'sans-serif',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
  },
});

export default PersonalDetailsScreen;
