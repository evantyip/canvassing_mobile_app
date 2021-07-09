import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

function LoginScreen({ navigation }) {
  const onLoginButtonPress = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Search' }],
    });
    navigation.push('Search');
  };
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>What is going on</Text>
      <Button title="Go to Search" onPress={onLoginButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
