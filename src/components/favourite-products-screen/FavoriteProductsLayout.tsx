import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import useThemeStore from '../../data/theme-provider';
import Products from './Products';

type Props = {};

const FavoriteProductsLayout = (props: Props) => {
  const {appTheme} = useThemeStore();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: appTheme.secondary,
      }}>
      <Products />
    </SafeAreaView>
  );
};

export default FavoriteProductsLayout;
