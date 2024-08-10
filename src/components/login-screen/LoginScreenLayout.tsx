import {View, Text, StyleSheet} from 'react-native';
import React, {Fragment} from 'react';
import Animated, {FadeInDown} from 'react-native-reanimated';
import useThemeStore from '../../data/theme-provider';
import LoginForm from './LoginForm';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppText} from '../common/AppText';
import TopText from './TopText';

const LoginScreenLayout = () => {
  const {appTheme} = useThemeStore();
  return (
    <Fragment>
      <TopText />
      <View style={styles.animateWrapper}>
        <Animated.View
          entering={FadeInDown}
          style={{
            ...styles.container,
            backgroundColor: appTheme.primary,
          }}>
          <View style={styles.welcomeWrapper}>
            <AppText style={styles.welcome}>Welcome Back</AppText>
          </View>
          <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
            }}>
            <LoginForm />
          </KeyboardAwareScrollView>
        </Animated.View>
      </View>
    </Fragment>
  );
};

export default LoginScreenLayout;

const styles = StyleSheet.create({
  welcomeWrapper: {
    width: '100%',
    paddingHorizontal: 20,
  },
  animateWrapper: {
    marginTop: 'auto',
    height: '50%',
  },
  welcome: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textAlign: 'left',
  },
  container: {
    paddingTop: 20,
    height: '100%',
    paddingBottom: 20,
    paddingHorizontal: 8,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
});
