import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ProductsScreenHeader from '../components/products-screen/ProductsScreenHeader';
import ProductsScreenLayout from '../components/products-screen/ProductsScreenLayout';
export const ProductsScreenName = 'ProductsScreen';
const ProductsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      header: () => <ProductsScreenHeader />,
    });
  }, [navigation]);
  return <ProductsScreenLayout />;
};

export default ProductsScreen;

const styles = StyleSheet.create({});
