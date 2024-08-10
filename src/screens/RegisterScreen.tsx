import {StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import RegisterScreenLayout from '../components/register-screen/RegisterScreenLayout';
import AuthWrapper from '../components/common/AuthWrapper';

type Props = {};

export const RegisterScreenName = 'RegisterScreen';
const RegisterScreen = () => {
  return (
    <Fragment>
      <AuthWrapper>
        <RegisterScreenLayout />
      </AuthWrapper>
    </Fragment>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
