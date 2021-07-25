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

class LoginScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionId: '',
      firstName: '',
      lastName: '',
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
        backendBaseURL + '/auth/token/obtain/',
        requestParameters
      );

      const { access } = res.data;
      this.props.store.setToken(access);
      this.props.store.setVolunteerName(
        this.state.firstName + ' ' + this.state.lastName
      );
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
        {/* Modal here? */}
        {this.state.error && <Text>{this.state.error}</Text>}
        <Subheading>Session ID</Subheading>
        <TextInput
          mode="outlined"
          placeholder={this.state.sessionId}
          onChangeText={(text) => this.setState({ sessionId: text })}
        />
        <Divider />
        <Subheading>First Name</Subheading>
        <TextInput
          mode="outlined"
          placeholder="EX: Mary"
          onChangeText={(text) => this.setState({ firstName: text })}
        />
        <Headline>Last Name</Headline>
        <TextInput
          mode="outlined"
          placeholder="EX: Smith"
          onChangeText={(text) => this.setState({ lastName: text })}
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
    alignContent: 'flex-start',
    justifyContent: 'flex',
  },
});

export default observer(LoginScreen);
