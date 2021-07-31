import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import {
  Button,
  Headline,
  Text,
  TextInput,
  Subheading,
} from 'react-native-paper';
import backendBaseURL from '../constants/url';
import axios from 'axios';

const SearchScreen = ({ store, navigation }) => {
  const [houseNumber, sethouseNumber] = useState('20908');
  const [streetName, setstreetName] = useState('abalar');
  const [error, setError] = useState();

  const onSearchButtonPress = async () => {
    try {
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: store.token,
          'Content-Type': 'application/json',
        },
        body: {
          house_number: houseNumber,
          street: streetName.toUpperCase(),
        },
      };

      const { data } = await axios.get(backendBaseURL + '/voters/', options);
      const results = data.results;
      console.log(houseNumber + ' ' + streetName);
      console.log(results);

      if (results.length == 0 || results === undefined) {
        setError('Failed to find any results');
      } else {
        store.setSearchResults(results);
        navigation.push('SearchResults');
      }
    } catch (e) {
      setError('Failed to send request to server');
    }
  };

  return (
    <View style={styles.container}>
      <Headline>Voter Search</Headline>
      <Subheading>House Number</Subheading>
      {error && <Text>{error}</Text>}
      <TextInput
        mode="outlined"
        placeholder="EX: 20908"
        onChangeText={(text) => sethouseNumber(text)}
      />
      <Subheading>Street Name</Subheading>
      <TextInput
        mode="outlined"
        placeholder="EX: Abalar"
        onChangeText={(text) => setstreetName(text)}
      />
      <Button mode="contained" onPress={onSearchButtonPress}>
        Search
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default observer(SearchScreen);
