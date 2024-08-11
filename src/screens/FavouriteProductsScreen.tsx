import {StyleSheet} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import FavoriteProductsLayout from '../components/favourite-products-screen/FavoriteProductsLayout';
import useThemeStore from '../data/theme-provider';
export const FavoriteProductsScreenName = 'FavoriteProductsScreen';
const FavoriteProductsScreen = () => {
  const {appTheme} = useThemeStore();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Favorite Products',
      headerStyle: {
        backgroundColor: appTheme.button,
      },
      headerTitleStyle: {
        color: appTheme.text,
        fontFamily: 'Poppins-SemiBold',
      },
    });
  }, [navigation, appTheme]);
  return <FavoriteProductsLayout />;
};

export default FavoriteProductsScreen;

const styles = StyleSheet.create({});
