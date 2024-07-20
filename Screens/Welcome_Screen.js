
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const WelcomeScreen = ({ navigation }) => {

  const name = useSelector(state=>state.userData.userName);

  return (
    <View>
      <Text>{name}</Text>
      <Text>Welcome to Rick and Morty App!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default WelcomeScreen;
