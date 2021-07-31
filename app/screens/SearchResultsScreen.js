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

class SearchResultsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  selectVoter(key) {
    const voter = this.props.store.voterHash[key];
    this.props.store.setSelectedVoter(voter);
    console.log(this.props.store.selectedVoter);
  }

  render() {
    return (
      <View style={styles.container}>
        <List.Section>
          <List.Subheader>Search Results</List.Subheader>
          {this.props.store.searchResults.map((voter) => {
            const name = voter.name_first + ' ' + voter.name_last;
            return (
              <List.Item
                key={voter.voter_id}
                title={name}
                onPress={() => this.selectVoter(voter.voter_id)}
              />
            );
          })}
        </List.Section>
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
