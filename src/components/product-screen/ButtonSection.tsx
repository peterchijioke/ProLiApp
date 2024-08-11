import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {AppText} from '../common/AppText';
import useThemeStore from '../../data/theme-provider';
import QuantityIncrementor from './QuantityIncrementor';

const ButtonSection = () => {
  const {appTheme} = useThemeStore();
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: 10,
        marginBottom: 20,
        marginTop: 'auto',
        gap: 10,
      }}>
      <QuantityIncrementor />
      <TouchableOpacity
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: 48,
          backgroundColor: appTheme.button,
          borderRadius: 5,
        }}>
        <AppText
          styles={{
            fontFamily: 'Poppins-SemiBold',
          }}>
          Add to cart
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonSection;
