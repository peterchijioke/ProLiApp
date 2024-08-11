import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import useThemeStore from '../../data/theme-provider';
import ImageCarouseSection from './ImageCarouseSection';
import useSWR from 'swr';
import {getApiService} from '../../services';
import useProductsStore from '../../data/products-provider';
import AppToast, {ToastEnum} from '../../utils/AppToast';
import ProductDetailsSection from './ProductDetailsSection';
import ButtonSection from './ButtonSection';

type Props = {};

const ProductScreenLayout = (props: Props) => {
  const {appTheme} = useThemeStore();
  const {product} = useProductsStore();
  const {isLoading, error, data} = useSWR(
    `/products/${product?.id}`,
    getApiService,
  );

  useEffect(() => {
    if (data?.error) {
      AppToast(data.message as string, ToastEnum.error);
    }
  }, [error, data]);
  return (
    <View
      style={{
        backgroundColor: appTheme.background,
        height: '100%',
        width: '100%',
        position: 'relative',
      }}>
      <ImageCarouseSection product={data?.data} />
      <ProductDetailsSection product={data?.data} />
      <ButtonSection />
    </View>
  );
};

export default ProductScreenLayout;
