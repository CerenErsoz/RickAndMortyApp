import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, Image } from 'react-native';

const CharacterItem = ({ character }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState(null);

  const fetchCharacterDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error("Failed to fetch character details:", error);
    }
  };

  const handlePress = async () => {
    await fetchCharacterDetails(character.url);
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.characterButton} onPress={handlePress}>
        <Image source={{ uri: character.image }} style={styles.characterImage} />
        <Text style={styles.characterName}>{character.name}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {details ? (
              <>
                <Text style={styles.modalTitle}>{details.name}</Text>
                <Image source={{ uri: details.image }} style={styles.modalImage} />
                <Text style={styles.modalText}>Status: {details.status}</Text>
                <Text style={styles.modalText}>Species: {details.species}</Text>
                <Text style={styles.modalText}>Gender: {details.gender}</Text>
                <Text style={styles.modalText}>Origin: {details.origin.name}</Text>
                <Text style={styles.modalText}>Location: {details.location.name}</Text>
              </>
            ) : (
              <Text style={styles.modalText}>Loading...</Text>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  characterButton: {
    padding: 15,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  characterImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  characterName: {
    color: '#97ce4c',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#1c1c1c',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: '#97ce4c',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  closeButton: {
    color: '#97ce4c',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CharacterItem;