import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import useSWR from 'swr';
import {getApiService} from '../../services';
import ListEmpty from '../common/ListEmpty';
import ProductCard from './ProductCard';
import AppToast, {ToastEnum} from '../../utils/AppToast';

const Products = () => {
  const [path, setPath] = useState<string>();
  const {data, isLoading, error} = useSWR(path ?? '/products', getApiService);
  const handleRefresh = async () => {
    setPath('/products');
  };
  useEffect(() => {
    if (data?.error) {
      AppToast(data.message as string, ToastEnum.error);
    }
  }, [error, data]);
  const _renderItem = ({item}: any) => <ProductCard product={item} />;
  return (
    <KeyboardAwareFlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      onRefresh={handleRefresh}
      refreshing={isLoading}
      keyExtractor={item => item.id}
      renderItem={_renderItem}
      ListEmptyComponent={ListEmpty}
      data={data?.data?.products}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 10,
    gap: 10,
    paddingBottom: 16,
    paddingTop: 10,
  },
});
export default Products;
