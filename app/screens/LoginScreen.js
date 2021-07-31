import React, { useState } from 'react';
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

const LoginScreen = ({ store, navigation }) => {
  const [sessionId, setSessionId] = useState('admin');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState();

  const onLoginButtonPress = async () => {
    try {
      const requestParameters = {
        username: sessionId.toLowerCase(),
        password: 'password123',
      };

      const res = await axios.post(
        backendBaseURL + '/auth/token/obtain/',
        requestParameters
      );

      const { access } = res.data;
      store.setToken(access);
      store.setVolunteerName(firstName + ' ' + lastName);
      navigation.reset({
        index: 0,
        routes: [{ name: 'Search' }],
      });
      navigation.push('Search');
    } catch (e) {
      setError(e);
    }
  };

  return (
    <View style={styles.container}>
      {/* Modal here? */}
      {error && <Text>{error}</Text>}
      <Subheading>Session ID</Subheading>
      <TextInput
        mode="outlined"
        placeholder={sessionId}
        onChangeText={(text) => setSessionId(text)}
      />
      <Divider />
      <Subheading>First Name</Subheading>
      <TextInput
        mode="outlined"
        placeholder="EX: Mary"
        onChangeText={(text) => setFirstName(text)}
      />
      <Subheading>Last Name</Subheading>
      <TextInput
        mode="outlined"
        placeholder="EX: Smith"
        onChangeText={(text) => setLastName(text)}
      />
      <Button mode="contained" onPress={onLoginButtonPress}>
        Login
      </Button>
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

export default observer(LoginScreen);
