import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './src/routes/MainRoute';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <React.Fragment>
      <NavigationContainer>
        <MainRoute />
      </NavigationContainer>
      <Toast />
    </React.Fragment>
  );
}
