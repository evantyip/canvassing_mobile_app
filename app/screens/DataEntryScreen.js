import React from 'react';
import { View, StyleSheet } from 'react-native';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import {
  Button,
  Headline,
  Text,
  TextInput,
  Subheading,
} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import backendBaseURL from '../constants/url';
import axios from 'axios';

const Tab = createMaterialBottomTabNavigator();
const CanvassingLogsRoute = ({ logs, navigation }) => {
  // console.log(props.store);
  console.log(logs);
  return (
    <View style={styles.container}>
      <Text>This is log screen</Text>
    </View>
  );
};

const MainRoute = ({ store, navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is main screen</Text>
    </View>
  );
};

const DataEntryScreen = ({ store, navigation }) => {
  const voter = toJS(store.selectedVoter);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'main', title: 'Data Entry', icon: 'album' },
    { key: 'canvassingLogs', title: 'Logs', icon: 'history' },
  ]);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        children={() => <MainRoute voter={voter} navigation={navigation} />}
        options={{
          tabBarLabel: 'Main',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="question-answer"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="canvassingLogs"
        children={() => (
          <CanvassingLogsRoute
            logs={voter.canvassing_logs}
            navigation={navigation}
          />
        )}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default observer(DataEntryScreen);
