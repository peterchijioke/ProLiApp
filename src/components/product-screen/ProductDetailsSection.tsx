import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {AppText} from '../common/AppText';
import {Product} from '../../types/product';
import useThemeStore from '../../data/theme-provider';
import {Heart, Star} from 'lucide-react-native';
import AppToast, {ToastEnum} from '../../utils/AppToast';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  product: Product;
};

const ProductDetailsSection = ({product, ...props}: Props) => {
  const {appTheme} = useThemeStore();
  const {setAuthUser, loginUser} = useThemeStore();
  const handleAddFav = async () => {
    try {
      await AsyncStorage.setItem(
        '@user',
        JSON.stringify({
          ...loginUser,
          favorites: loginUser?.favorites
            ? [...loginUser?.favorites, product?.id]
            : [product?.id],
        }),
      );
      setAuthUser({
        ...loginUser,
        favorites: loginUser?.favorites
          ? [...loginUser?.favorites, product?.id]
          : [product?.id],
      });
      AppToast(
        'Product added to your favorites list successfully',
        ToastEnum.success,
      );
    } catch (error: any) {
      AppToast(error.message, ToastEnum.error);
    }
  };
  const removeFav = async () => {
    try {
      const updatedFavorites = loginUser?.favorites?.filter(
        (favId: number) => favId !== product?.id,
      );

      await AsyncStorage.setItem(
        '@user',
        JSON.stringify({
          ...loginUser,
          favorites: updatedFavorites,
        }),
      );

      setAuthUser({
        ...loginUser,
        favorites: updatedFavorites,
      });

      AppToast(
        'Product removed from your favorites list successfully',
        ToastEnum.success,
      );
    } catch (error: any) {
      AppToast(error.message, ToastEnum.error);
    }
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 15,
      }}>
      <AppText
        styles={{
          fontSize: 24,
          fontFamily: 'Poppins-Bold',
        }}>
        {product?.title}
      </AppText>
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 20,
        }}>
        <AppText
          styles={{
            color: '#b7b2b2',
          }}>
          <AppText
            styles={{
              fontFamily: 'Poppins-Bold',
              color: '#b7b2b2',
            }}>
            SKU:
          </AppText>{' '}
          {product?.sku}
        </AppText>
        <AppText
          styles={{
            color: appTheme.button,
          }}>
          <AppText
            styles={{
              fontFamily: 'Poppins-Bold',
              color: '#b7b2b2',
            }}>
            Availability:
          </AppText>{' '}
          {product?.availabilityStatus}
        </AppText>
        <AppText
          styles={{
            color: appTheme.button,
          }}>
          <AppText
            styles={{
              fontFamily: 'Poppins-Bold',
              color: '#b7b2b2',
            }}>
            Quantity:
          </AppText>{' '}
          {product?.stock}
        </AppText>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '5%',
          justifyContent: 'space-between',
        }}>
        <AppText
          styles={{
            fontSize: 24,
            fontFamily: 'Poppins-Bold',
          }}>
          ₦ {product?.price}
        </AppText>

        <TouchableOpacity
          onPress={
            loginUser?.favorites && loginUser?.favorites.includes(product?.id)
              ? removeFav
              : handleAddFav
          }>
          <Heart
            size={30}
            color={
              loginUser?.favorites && loginUser?.favorites.includes(product?.id)
                ? 'red'
                : appTheme?.button
            }
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsSection;
