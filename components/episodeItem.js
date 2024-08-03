import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal, ScrollView } from 'react-native';

const EpisodeItem = ({ episode }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState(null);

  const fetchEpisodeDetails = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setDetails(data);
    } catch (error) {
      console.error("Failed to fetch episode details:", error);
    }
  };

  const handlePress = async () => {
    await fetchEpisodeDetails(episode.url);
    setModalVisible(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.episodeButton} onPress={handlePress}>
        <Text style={styles.episodeCode}>{episode.episode}: </Text>
        <Text style={styles.episodeName} numberOfLines={1} ellipsizeMode="tail">
          {episode.name}
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <ScrollView>
              {details ? (
                <>
                  <Text style={styles.modalTitle}>{details.name}</Text>
                  <Text style={styles.modalText}>Air Date: {details.air_date}</Text>
                  <Text style={styles.modalText}>Episode: {details.episode}</Text>
                  <Text style={styles.modalText}>Characters:</Text>
                  {details.characters.map((character, index) => (
                    <Text key={index} style={styles.characterText}>{character}</Text>
                  ))}
                </>
              ) : (
                <Text style={styles.modalText}>Loading...</Text>
              )}
            </ScrollView>
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
  episodeButton: {
    padding: 15,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  episodeCode: {
    color: '#fff',
    fontSize: 18,
  },
  episodeName: {
    color: '#97ce4c',
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 5,
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
    maxHeight: '80%',
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
  },
  characterText: {
    color: '#97ce4c',
    fontSize: 14,
  },
  closeButton: {
    color: '#97ce4c',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default EpisodeItem;
