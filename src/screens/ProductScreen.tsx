import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import useProductsStore from '../data/products-provider';
import {trimText} from '../utils';

export const ProductScreenName = 'ProductScreen';
const ProductScreen = () => {
  const {product} = useProductsStore();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: `${trimText(
        product?.title as string,
        'ProductScreen Thatmaska'.length,
      )}`,
    });
  }, [navigation, product]);
  return (
    <View>
      <Text>ProductScreen</Text>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
