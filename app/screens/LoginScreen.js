import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react';
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionId: '',
      error: null,
    };
  }
  onLoginButtonPress = async () => {
    try {
      const requestParameters = {
        username: this.state.sessionId.toLowerCase(),
        password: 'password123',
      };

      const res = await axios.post(
        'https://d39fb3mlb4nn9s.cloudfront.net/auth/token/obtain/',
        requestParameters
      );

      const { access } = res.data;
      this.props.store.setToken(access);
      this.props.navigation.reset({
        index: 0,
        routes: [{ name: 'Search' }],
      });
      this.props.navigation.push('Search');
    } catch (e) {
      this.setState({ error: e });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.error && <Text>THERE IS AN ERROR </Text>}
        <TextInput
          mode="outlined"
          placeholder={this.state.sessionId}
          onChangeText={(text) => this.setState({ sessionId: text })}
        />
        <Button mode="contained" onPress={this.onLoginButtonPress}>
          Login
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

export default observer(LoginScreen);
