// BurgerMenu.js
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BurgerMenu = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    console.log("Toggle menu");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.burgerButton} onPress={handlePress}>
        <View style={styles.burgerLine}></View>
        <View style={styles.burgerLine}></View>
        <View style={styles.burgerLine}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  burgerButton: {
    padding: 10,
  },
  burgerLine: {
    width: 30,
    height: 3,
    backgroundColor: '#97ce4c',
    marginVertical: 2,
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  menuItem: {
    paddingVertical: 5,
    fontSize: 16,
  },
});

export default BurgerMenu;
