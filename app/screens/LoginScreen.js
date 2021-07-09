import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';

class LoginScreen extends Component {
  onLoginButtonPress = () => {
    this.props.store.setToken('this is a test');
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: 'Search' }],
    });
    this.props.navigation.push('Search');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>What is going on</Text>
        <Button title="Go to Search" onPress={this.onLoginButtonPress} />
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

export default observer(LoginScreen);
