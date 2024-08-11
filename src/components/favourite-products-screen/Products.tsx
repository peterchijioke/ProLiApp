import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import useSWR from 'swr';
import {getApiService} from '../../services';
import ListEmpty from '../common/ListEmpty';
import ProductCard from './ProductCard';
import AppToast, {ToastEnum} from '../../utils/AppToast';
import useThemeStore from '../../data/theme-provider';

const Products = () => {
  const [path, setPath] = useState<string>('/products');
  const {loginUser} = useThemeStore();
  const {data, isLoading, error} = useSWR(path, getApiService);
  const favorites = loginUser?.favorites ?? [];

  useEffect(() => {
    if (error || data?.error) {
      AppToast((data?.message as string) || error.message, ToastEnum.error);
    }
  }, [error, data]);

  const filteredData = data?.data?.products?.filter((item: any) =>
    favorites.includes(item.id),
  );

  const _renderItem = ({item}: any) => <ProductCard product={item} />;

  return (
    <KeyboardAwareFlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
      refreshing={isLoading}
      keyExtractor={item => item.id}
      renderItem={_renderItem}
      ListEmptyComponent={ListEmpty}
      data={filteredData}
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
