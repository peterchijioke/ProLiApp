import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import useThemeStore from '../../data/theme-provider';
import {AppText} from '../common/AppText';
import {Minus, Plus} from 'lucide-react-native';

type Props = {};

const QuantityIncrementor = (props: Props) => {
  const {appTheme} = useThemeStore();
  const [count, setCount] = useState<number>(0);
  return (
    <View style={{...styles.container, borderColor: appTheme.border}}>
      <TouchableOpacity
        disabled={count === 0}
        onPress={() => {
          if (count !== 0) {
            setCount(p => p - 1);
          }
        }}
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Minus color={appTheme.button} />
      </TouchableOpacity>
      <AppText
        styles={{
          fontFamily: 'Poppins-Bold',
        }}>
        {count}
      </AppText>
      <TouchableOpacity
        onPress={() => setCount(p => p + 1)}
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}>
        <Plus color={appTheme.button} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    flexDirection: 'row',
    height: 48,
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default QuantityIncrementor;
