import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

class SearchScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is search screen</Text>
        <Text>Token is {this.props.store.token} </Text>
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
