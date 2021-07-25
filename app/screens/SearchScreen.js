import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { Button, Headline, TextInput, Subheading } from 'react-native-paper';
import backendBaseURL from '../constants/url';
import axios from 'axios';

class SearchScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houseNumber: '',
      streetName: '',
      error: null,
    };
  }

  onSearchButtonPress = async () => {
    try {
      const options = {
        headers: {
          accept: 'application/json',
          Authorization: this.props.store.token,
          'Content-Type': 'application/json',
        },
        body: {
          house_number: this.state.houseNumber,
          street: this.state.streetName.toUpperCase(),
        },
      };

      const { data } = await axios.get(backendBaseURL + '/voters/', options);
      const results = data.results;

      if (results.length == 0 || results === undefined) {
        this.setState({ error: 'Failed to find any results' });
      } else {
        this.props.store.setSearchResults(results);
        this.props.navigation.reset({
          index: 0,
          routes: [{ name: 'SearchResults' }],
        });
        this.props.navigation.push('SearchResults');
      }
    } catch (e) {
      this.setState({ error: 'Failed to send request to server' });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Headline>Voter Search</Headline>
        <Subheading>House Number</Subheading>
        <TextInput
          mode="outlined"
          placeholder="EX: 20908"
          onChangeText={(text) => this.setState({ houseNumber: text })}
        />
        <Subheading>Street Name</Subheading>
        <TextInput
          mode="outlined"
          placeholder="EX: Abalar"
          onChangeText={(text) => this.setState({ streetName: text })}
        />
        <Button mode="contained" onPress={this.onSearchButtonPress}>
          Search
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default observer(SearchScreen);
