import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchCharacters } from '../services/characterService'; 
import CharacterItem from '../components/characterItem';

const CharacterScreen = ({ navigation }) => {
  const name = useSelector(state => state.userData.userName);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState({});

  useEffect(() => {
    loadCharacters(currentPage);
  }, [currentPage]);

  const loadCharacters = async (page) => {
    setLoading(true);
    try {
      const data = await fetchCharacters(page);
      setCharacters(data.results);
      setInfo(data.info);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    if (info.next) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (info.prev) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
          <Text style={styles.homeButtonText}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.greetingText}>{name}</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="#97ce4c" />
      ) : (
        <FlatList
          data={characters}
          renderItem={({ item }) => <CharacterItem character={item} />}
          keyExtractor={item => item.id.toString()}
          style={styles.list}
        />
      )}
      <View style={styles.paginationContainer}>
        <TouchableOpacity onPress={handlePrevPage} disabled={!info.prev}>
          <Text style={[styles.paginationButton, !info.prev && styles.disabledButton]}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPage} disabled={!info.next}>
          <Text style={[styles.paginationButton, !info.next && styles.disabledButton]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  homeButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#97ce4c',
    borderRadius: 5,
  },
  homeButtonText: {
    color: '#1c1c1c',
    fontSize: 16,
    fontWeight: 'bold',
  },
  greetingText: {
    color: '#97ce4c',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  list: {
    flex: 1,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  paginationButton: {
    color: '#97ce4c',
    fontSize: 18,
    fontWeight: 'bold',
  },
  disabledButton: {
    color: '#555',
  },
});

export default CharacterScreen;