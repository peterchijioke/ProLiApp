import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductsScreen, {ProductsScreenName} from '../screens/ProductsScreen';
import LoginScreen, {LoginScreenName} from '../screens/LoginScreen';
import RegisterScreen, {RegisterScreenName} from '../screens/RegisterScreen';
import ProductScreen, {ProductScreenName} from '../screens/ProductScreen';

function MainRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={LoginScreenName} component={LoginScreen} />
      <Stack.Screen name={RegisterScreenName} component={RegisterScreen} />
      <Stack.Screen name={ProductsScreenName} component={ProductsScreen} />
      <Stack.Screen name={ProductScreenName} component={ProductScreen} />
    </Stack.Navigator>
  );
}
export default MainRoute;
