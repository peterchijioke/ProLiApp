import {View, Text} from 'react-native';
import React from 'react';
import useThemeStore from '../../data/theme-provider';
import {AppText} from './AppText';

const ListEmpty = () => {
  const {appTheme} = useThemeStore();
  return (
    <View
      style={{
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <AppText
        style={{
          fontSize: 18,
          fontFamily: 'Poppins-SemiBold',
        }}>
        No Product Found
      </AppText>
    </View>
  );
};

export default ListEmpty;
