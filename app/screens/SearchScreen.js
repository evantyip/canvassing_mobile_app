import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function SearchScreen(props) {
  return (
    <View style={styles.container}>
      <Text>This is search screen</Text>
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

export default SearchScreen;