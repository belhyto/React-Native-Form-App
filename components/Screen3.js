// components/AdditionalDetailsScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable,StyleSheet, ImageBackground, ScrollView , Image, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-', 'Rh'];
const relations = ['Father', 'Mother', 'Brother', 'Sister', 'Friend', 'Other'];
const professions = ['Doctor', 'Engineer', 'Teacher', 'Lawyer', 'Other'];

const AdditionalDetailsScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    bloodGroup: '',
    relation: '',
    profession: '',
    religion: '',
    ethnicity: '',
    nationality: '',
  });

  const handleSubmit = () => {
    // Handle form submission here
    navigation.navigate('ThankYou');
  };
  const handleBloodGroupPress = (bg) => {
    setFormData({ ...formData, bloodGroup: bg });
  };

  const handleRelationPress = (rel) => {
    setFormData({ ...formData, relation: rel });
  };

  return (
    <View style={styles.container}>
    <ImageBackground style={styles.imgBackground} source={require('../assets/formBG3.jpg')}>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
      <Text style={styles.title}>Getting the  facts right</Text>
      
      <Text style={styles.label}>Blood Group</Text>
      <View style={styles.tapSelectContainer}>
        {bloodGroups.map((bg) => (
          <Pressable
            key={bg}
            style={({ pressed }) => [
              { backgroundColor: formData.bloodGroup === bg ? '#223A89' : pressed ? '#ddd' : '#fff' },
              styles.pressableButton,
            ]}
            onPress={() => handleBloodGroupPress(bg)}
          >
            <Text style={[styles.buttonText, { color: formData.bloodGroup === bg ? 'white' : 'black' }]}>{bg}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Relation</Text>
      <View style={styles.tapSelectContainer}>
        {relations.map((rel) => (
          <Pressable
            key={rel}
            style={({ pressed }) => [
              { backgroundColor: formData.relation === rel ?  '#223A89'  : pressed ? '#ddd' : '#fff' },
              styles.pressableButton,
            ]}
            onPress={() => handleRelationPress(rel)}
          >
            <Text style={[styles.buttonText, { color: formData.relation === rel ? 'white' : 'black' }]}>{rel}</Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.label}>Profession</Text>
      <View style={styles.pickerBox}>
      <Picker
        selectedValue={formData.profession}
        onValueChange={(itemValue) => setFormData({ ...formData, profession: itemValue })}
        style={styles.picker}
      >
        {professions.map((profession) => (
          <Picker.Item key={profession} label={profession} value={profession} />
        ))}
      </Picker>
      </View>
      <Text style={styles.label2}>Religion</Text>

      <TextInput
        style={styles.input}
        placeholder="Religion"
         placeholderTextColor="#0A0A0A"
        value={formData.religion}
        onChangeText={(value) => setFormData({ ...formData, religion: value })}
      />
      <Text style={styles.label2}>Ethnicity</Text>

      <TextInput
        style={styles.input}
        placeholder="Ethnicity"
         placeholderTextColor="#0A0A0A"
        value={formData.ethnicity}
        onChangeText={(value) => setFormData({ ...formData, ethnicity: value })}
      />
      <Text style={styles.label2}>Nationality</Text>

      <TextInput
        style={styles.input}
        placeholder="Nationality"
         placeholderTextColor="#0A0A0A"
        value={formData.nationality}
        onChangeText={(value) => setFormData({ ...formData, nationality: value })}
      />

      <Pressable style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
      </View>
      </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollView: {
    flex: 1,
    padding: 20,
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
    padding: 30,
    marginTop:90,
  },

  title: {
    fontFamily: 'Lexend_400Regular',
    fontSize: 50,
    color: 'white',
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginTop:40,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
  },
  label2: {
    fontSize: 18,
    marginTop:20,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
  },
  tapSelectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
  pressableButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 5,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,

  },
  buttonText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Lexend_400Regular',
  },
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    padding: 14,
    marginVertical: 15,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 247, 247, 0.35)',
    color: 'white',
  },
  picker: {
    
    borderColor: '#fff',
    width: '80%',
    color: '#0A0A0A',
    marginBottom: 0,
  },
  submitButton: {
    borderWidth: 2,
    marginTop:24,
    borderColor: '#52B2FF',
    backgroundColor: 'rgba(35, 134, 101, 0.19)',
    padding: 16,
    borderRadius: 31,
    color: 'white',
  },
  pickerBox: {
    borderWidth: 2,
    borderColor: 'white',
    marginVertical: 15,
    width: '80%',
    borderRadius: 50,
    backgroundColor: 'rgba(255, 247, 247, 0.35)',
  },
  
});

export default AdditionalDetailsScreen;

