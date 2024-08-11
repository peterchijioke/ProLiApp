import {View, Text, StatusBar, Platform, TextInput} from 'react-native';
import React from 'react';
import useThemeStore from '../../data/theme-provider';
import AppNormalInput from '../common/AppNormalInput';

type Props = {};

const ProductScreenHeader = (props: Props) => {
  const {appTheme} = useThemeStore();
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View
        style={{
          paddingTop: Platform.select({
            ios: 20,
            android: StatusBar.currentHeight,
          }),
          paddingBottom: Platform.select({
            android: Number(StatusBar.currentHeight) / 20,
            ios: 10,
          }),
          backgroundColor: appTheme?.button,
          borderBottomRightRadius: 2,
          justifyContent: 'center',
          borderBottomLeftRadius: 2,
          paddingHorizontal: 10,
          height: 100,
        }}>
        <TextInput
          style={{
            height: 48,
            backgroundColor: appTheme.card,
            borderRadius: 8,
            padding: 8,
            fontFamily: 'Poppins-Regular',
          }}
          placeholder="Search product..."
        />
      </View>
    </>
  );
};

export default ProductScreenHeader;
