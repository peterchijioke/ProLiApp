import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ProductScreenHeader from '../components/products-screen/ProductScreenHeader';
import ProductsScreenLayout from '../components/products-screen/ProductsScreenLayout';
export const ProductsScreenName = 'ProductsScreen';
const ProductsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      header: () => <ProductScreenHeader />,
    });
  }, [navigation]);
  return <ProductsScreenLayout />;
};

export default ProductsScreen;

const styles = StyleSheet.create({});
