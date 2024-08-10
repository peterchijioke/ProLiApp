import {View, Text} from 'react-native';
import React from 'react';
import {AppText} from '../common/AppText';
import useThemeStore from '../../data/theme-provider';

type Props = {};

const TopText = () => {
  const {appTheme} = useThemeStore();
  return (
    <View
      style={{
        marginHorizontal: 19,
        marginTop: 20 * 3,
      }}>
      <AppText
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 24,
          color: appTheme.button,
        }}>
        ProLiApp
      </AppText>
      <AppText
        style={{
          fontFamily: 'Poppins-Bold',
          fontSize: 10,
          color: appTheme.button,
        }}>
        Redefines the way you shop...
      </AppText>
    </View>
  );
};

export default TopText;
