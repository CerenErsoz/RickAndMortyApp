
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const CharacterScreen = () => {
  const name = useSelector(state=>state.userData.userName);

  return (
    <View>
      <Text>{name}</Text>
      <Text>This is the Character Screen</Text>
    </View>
  );
};

export default CharacterScreen;
