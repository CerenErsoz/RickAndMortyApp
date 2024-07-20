
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const ChapterScreen = () => {

  const name = useSelector(state=>state.userData.userName);

  return (
    <View>
      <Text>{name}</Text>
      <Text>This is the Chapter Screen</Text>
    </View>
  );
};

export default ChapterScreen;
