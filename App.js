import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { NativeRouter, Route, Link } from 'react-router-native';

import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return <LoginScreen />;
}
