
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const isSignedIn = useSelector(state=>state.userData.isSignedIn);
  const name = useSelector(state=>state.userData.userName);

  return (
    <View>{!isSignedIn ? (<Text>No</Text>):(<Text>Yes</Text>)}
      <Text>{name}</Text>
      <Text>This is the Home Screen</Text>
      <Button title="Go to Characters" onPress={() => navigation.navigate('Character')} />
      <Button title="Go to Chapters" onPress={() => navigation.navigate('Chapter')} />
    </View>
  );
};

export default HomeScreen;
