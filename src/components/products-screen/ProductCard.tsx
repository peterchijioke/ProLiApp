import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import useThemeStore from '../../data/theme-provider';
import {Product} from '../../types/product';
import {AppText} from '../common/AppText';
import {trimText} from '../../utils';
import {Heart, ShoppingCart} from 'lucide-react-native';
import {useNavigation} from '@react-navigation/native';
import useProductsStore from '../../data/products-provider';
import {ProductScreenName} from '../../screens/ProductScreen';

const ProductCard = ({product}: {product: any}) => {
  const {setProduct} = useProductsStore();
  const navigation = useNavigation();
  const {appTheme} = useThemeStore();
  return (
    <Pressable
      onPress={() => {
        setProduct(product);
        navigation.navigate(ProductScreenName as never);
      }}
      style={{
        backgroundColor: appTheme.card,
        ...styles.container,
      }}>
      <Image
        source={
          product?.thumbnail
            ? {
                uri: product.thumbnail,
              }
            : require('../../assets/images/bg.jpg')
        }
        style={{height: 100, width: 100, borderRadius: 10}}
      />
      <View
        style={{
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center',
          flexGrow: 1,
        }}>
        <AppText
          styles={{
            fontSize: 20,
            color: appTheme.button,
            fontFamily: 'Poppins-Bold',
          }}>
          ₦{product?.price}
        </AppText>
        <AppText
          styles={{
            fontFamily: 'Poppins-SemiBold',
            maxWidth: 120,
          }}>
          {trimText(product?.title, 'Essence Mascara gvgcvgnvdv'.length)}
        </AppText>
        <AppText
          styles={{
            fontFamily: 'Poppins-Regular',
          }}>
          <AppText
            styles={{
              fontFamily: 'Poppins-SemiBold',
            }}>
            In stock:
          </AppText>{' '}
          {product?.stock}
        </AppText>
      </View>
      <View style={{...styles?.action}}>
        <TouchableOpacity
          style={{...styles.actionBtn, backgroundColor: appTheme.button}}>
          <Heart size={25} color={appTheme.notification} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.actionBtn, backgroundColor: appTheme.button}}>
          <ShoppingCart size={25} color={appTheme.notification} />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 125,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
    padding: 10,
  },
  actionBtn: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  action: {
    width: 100,
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',

    height: '100%',
  },
});
export default ProductCard;
