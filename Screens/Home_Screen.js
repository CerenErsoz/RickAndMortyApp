
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {
  const userInfoCheck = useSelector(state => state.userData.userInfo);
  const name = useSelector(state=>state.userData.userName);

  return (
    <View>{!userInfoCheck ? (<Text>No</Text>):(<Text>Yes</Text>)}
      <Text>{name}</Text>
      <Text>This is the Home Screen</Text>
      <Button title="Go to Characters" onPress={() => navigation.navigate('Character')} />
      <Button title="Go to Chapters" onPress={() => navigation.navigate('Chapter')} />
    </View>
  );
};

export default HomeScreen;
