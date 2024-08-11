import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import ProductsScreen, {ProductsScreenName} from '../screens/ProductsScreen';
import LoginScreen, {LoginScreenName} from '../screens/LoginScreen';
import RegisterScreen, {RegisterScreenName} from '../screens/RegisterScreen';
import ProductScreen, {ProductScreenName} from '../screens/ProductScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MainRoute() {
  const Stack = createNativeStackNavigator();
  const [state, setState] = useState<boolean>();
  useEffect(() => {
    (async () => {
      let f = await AsyncStorage.getItem('@login');
      if (f) {
        setState(true);
      }
    })();
  }, []);
  return (
    <Stack.Navigator>
      {!state ? (
        <>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name={LoginScreenName} component={LoginScreen} />
            <Stack.Screen
              name={RegisterScreenName}
              component={RegisterScreen}
            />
          </Stack.Group>
        </>
      ) : (
        <>
          <Stack.Group
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name={ProductsScreenName}
              component={ProductsScreen}
            />
            <Stack.Screen name={ProductScreenName} component={ProductScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
}
export default MainRoute;
