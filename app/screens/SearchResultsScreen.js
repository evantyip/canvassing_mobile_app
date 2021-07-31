import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import {
  Button,
  Divider,
  Headline,
  Subheading,
  TextInput,
  List,
} from 'react-native-paper';

const SearchResultsScreen = ({ store, navigation }) => {
  const selectVoter = (key) => {
    const voter = store.voterHash[key];
    store.setSelectedVoter(voter);
    navigation.push('DataEntry');
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader>Search Results</List.Subheader>
        {store.searchResults.map((voter) => {
          const name = voter.name_first + ' ' + voter.name_last;
          return (
            <List.Item
              key={voter.voter_id}
              title={name}
              onPress={() => selectVoter(voter.voter_id)}
            />
          );
        })}
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignContent: 'flex-start',
    justifyContent: 'flex',
  },
});

export default observer(SearchResultsScreen);
