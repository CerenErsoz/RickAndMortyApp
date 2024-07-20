
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import {store} from './src/store/store';
import HomeScreen from './Screens/Home_Screen';
import CharacterScreen from './Screens/Character_Screen';
import ChapterScreen from './Screens/Chapter_Screen';
import WelcomeScreen from './Screens/Welcome_Screen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Character" component={CharacterScreen} />
          <Stack.Screen name="Chapter" component={ChapterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
