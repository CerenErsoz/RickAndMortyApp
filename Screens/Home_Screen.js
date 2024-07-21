import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { search } from '../src/action/SeacrhActions';
import BurgerMenu from '../src/component/burger';

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const userInfoCheck = useSelector(state => state.userData.userInfo);
  const name = useSelector(state => state.userData.userName);

  async function handleOkPress () {
    await dispatch(search(text));
  };

  return (
    <View style={styles.container}>
      <BurgerMenu/>
      <Text style={styles.greetingText}>
        {!userInfoCheck ? 'Hi Guest' : `Hi ${name}`}
      </Text>
      <View style={styles.inputContainer}>
        <SafeAreaView style={styles.safeArea}>
          <TextInput 
            style={styles.search}
            placeholder="Search"
            placeholderTextColor="#97ce4c"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
        </SafeAreaView>
        <TouchableOpacity style={styles.buttonOK} onPress={handleOkPress}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    alignItems: 'center',
    padding: 20,
  },
  greetingText: {
    color: '#97ce4c',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  safeArea: {
    flex: 1,
    marginRight: 10,
  },
  search: {
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#1c1c1c',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
