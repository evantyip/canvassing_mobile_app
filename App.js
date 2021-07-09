import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import AppStore from './app/stores/AppStore';
import LoginScreen from './app/screens/LoginScreen';
import SearchScreen from './app/screens/SearchScreen';

const Stack = createStackNavigator();
const store = new AppStore();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} store={store} />}
        </Stack.Screen>
        <Stack.Screen
          name="Search"
          options={{
            headerTitle: 'Search For A Person',
            headerLeft: () => null,
          }}
        >
          {(props) => <SearchScreen {...props} store={store} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
