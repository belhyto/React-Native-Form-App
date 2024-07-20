// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './components/WelcomeScreen';
import PersonalDetailsScreen from './components/Screen1';
import DateOfBirthScreen from './components/Screen2';
import AdditionalDetailsScreen from './components/Screen3';
import * as SplashScreen from 'expo-splash-screen';
import ThankYouScreen from './components/Screen4';


const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PersonalDetails" component={PersonalDetailsScreen} />
        <Stack.Screen name="DateOfBirth" component={DateOfBirthScreen} />
        <Stack.Screen name="AdditionalDetails" component={AdditionalDetailsScreen} />
        <Stack.Screen name="ThankYou" component={ThankYouScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
