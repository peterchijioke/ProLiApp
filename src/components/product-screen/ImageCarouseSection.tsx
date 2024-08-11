import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {Fragment, useEffect, useRef, useState} from 'react';
import {Product} from '../../types/product';
import ListEmpty from '../common/ListEmpty';
import useThemeStore from '../../data/theme-provider';
const {width} = Dimensions.get('window');
type Props = {
  product: Product;
};

const ImageCarouseSection = ({product, ...props}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef: any = useRef(null);
  const {appTheme} = useThemeStore();

  const handleScroll = (event: {nativeEvent: {contentOffset: {x: number}}}) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
  };

  const _renderItem = ({item}: any) => (
    <Image
      style={{
        height: 300,
        width: width,
      }}
      source={{uri: item}}
    />
  );
  return (
    <View>
      <FlatList
        horizontal
        ref={flatListRef}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        keyExtractor={item => item}
        data={product?.images}
        renderItem={_renderItem}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: '3%',
        }}>
        {product?.images.length > 1 &&
          product?.images.map((item, index) => (
            <View
              key={String(item + index)}
              style={{
                height: 4,
                flexGrow: 1,
                borderRadius: 4,
                backgroundColor:
                  index === activeIndex ? appTheme.button : '#c4c4c4',
                margin: 4,
              }}
            />
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    elevation: 4,
  },
});
export default ImageCarouseSection;
