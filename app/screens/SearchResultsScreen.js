import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import {
  Button,
  Divider,
  Headline,
  Subheading,
  TextInput,
} from 'react-native-paper';
import backendBaseURL from '../constants/url';
import axios from 'axios';

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SDFJSKFDJLSFJK</Text>
        <Text>{this.props.store.searchResults.length}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
    justifyContent: 'flex',
  },
});

export default observer(SearchResultsScreen);
