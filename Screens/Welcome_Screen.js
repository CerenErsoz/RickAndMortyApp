import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, userInfo } from '../src/action/UserActions';

  const WelcomeScreen = ({ navigation }) => {
//   const name = useSelector(state => state.userData.userName);
//   const userInfoCheck = useSelector(state => state.userData.userInfo);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleOkPress = () => {
    dispatch(changeName(text));
    dispatch(userInfo());
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SafeAreaView style={styles.safeArea}>
          <TextInput 
            style={styles.nameInput}
            placeholder="Enter your name"
            placeholderTextColor="#97ce4c"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.buttonOK} onPress={handleOkPress}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
        <Image style={styles.image} source={require('../src/assest/cucumber.png')} />
        <Text style={styles.welcomeText}>
          Welcome..
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  safeArea: {
    flex: 1,
    marginRight: 10,
  },
  image: {
    width: 300,
    height: 400,
    marginBottom: 20,
    borderRadius: 10,
  },
  welcomeText: {
    color: '#97ce4c',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  nameInput: {
    flex: 1,
    height: 50,
    color: '#fff',
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#97ce4c',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#2a2a2a',
  },
  buttonOK: {
    backgroundColor: '#97ce4c',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#97ce4c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#1c1c1c',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
