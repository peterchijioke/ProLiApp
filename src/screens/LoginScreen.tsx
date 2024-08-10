import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import AuthWrapper from '../components/common/AuthWrapper';
import LoginScreenLayout from '../components/login-screen/LoginScreenLayout';

export const LoginScreenName = 'LoginScreen';
const LoginScreen = () => {
  return (
    <Fragment>
      <AuthWrapper>
        <LoginScreenLayout />
      </AuthWrapper>
    </Fragment>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
