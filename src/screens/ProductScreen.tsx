import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import useProductsStore from '../data/products-provider';
import {trimText} from '../utils';
import useThemeStore from '../data/theme-provider';
import ProductScreenLayout from '../components/product-screen/ProductScreenLayout';

export const ProductScreenName = 'ProductScreen';
const ProductScreen = () => {
  const {product} = useProductsStore();
  const {appTheme} = useThemeStore();

  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerStyle: {
        backgroundColor: appTheme.button,
      },
      headerTitleStyle: {
        color: appTheme.text,
        fontFamily: 'Poppins-SemiBold',
      },
      title: `${trimText(
        product?.title as string,
        'ProductScreen Thatmaska'.length,
      )}`,
    });
  }, [navigation, product, appTheme]);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <ProductScreenLayout />
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
