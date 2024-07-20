// components/DateOfBirthScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground,Pressable, Image, Alert  } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import { useNavigation } from '@react-navigation/native';

const DateOfBirthScreen = () => {
  const navigation = useNavigation();
  const [dob, setDob] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const goToNextScreen = () => {
    const selectedYear = dob.getFullYear();
    if (!dob || selectedYear > 2012) {
      Alert.alert('Oh no', 'Please select a valid date. Year must be 2012 or earlier.');
      return;
    }
    navigation.navigate('AdditionalDetails');
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imgBackground} source={require('../assets/formBG2.jpg')}>
        <View style={styles.innerContainer}>
        <Text style={styles.title}>Let's celebrate </Text>
        <Pressable style={styles.button} onPress={() => setShowDatePicker(true)}>
  <Image source={require('../assets/balloon.png')} style={styles.icon} />
  <Text style={styles.subHeader}>When's your birthday? </Text>
</Pressable>
          {showDatePicker && (
            <DateTimePicker
              value={dob}
              mode="date"
              display="default"
              onChange={(event, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) {
                  setDob(selectedDate);
                }
              }}
            />
          )}
          <View style={styles.card}>
  <Text style={styles.dayText}>{format(dob, 'dd')}</Text>
  <Text style={styles.monthYearText}>
    {format(dob, 'MMMM')} {format(dob, 'yyyy')}
  </Text>
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
  title: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 70,
    color: 'white',
    justifyContent: 'center',
  },
  dobText: {
    fontSize: 18,
    color: '#fff',
    marginTop: 20,
  },
  title: {
    fontSize: 65,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
    justifyContent: 'center',
  },
  subHeader: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    padding: 20,
    marginVertical: 15,
    width: '75%',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 247, 247, 0.35)',
    color: 'white',
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
  card: {
    borderWidth: 2,
    marginTop:24,
    borderColor: '#52B2FF',
    backgroundColor: 'rgba(35, 134, 101, 0.19)',
    padding: 16,
    borderRadius: 31,
  },
  dayText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'Lexend_400Regular',
  },
  monthYearText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Lexend_400Regular',
  },
});

export default DateOfBirthScreen;
