import {View, Text} from 'react-native';
import React from 'react';
import {AppText} from '../common/AppText';
import {Product} from '../../types/product';
import useThemeStore from '../../data/theme-provider';
import {Star} from 'lucide-react-native';

type Props = {
  product: Product;
};

const ProductDetailsSection = ({product, ...props}: Props) => {
  const {appTheme} = useThemeStore();
  console.log(product);
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
      <AppText
        styles={{
          fontSize: 24,
          marginTop: '5%',
          fontFamily: 'Poppins-Bold',
        }}>
        ₦ {product?.price}
      </AppText>
    </View>
  );
};

export default ProductDetailsSection;
