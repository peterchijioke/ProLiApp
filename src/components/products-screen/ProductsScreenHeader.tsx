import {
  View,
  Text,
  StatusBar,
  Platform,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import useThemeStore from '../../data/theme-provider';
import LogoutContexMenu from './LogoutContexMenu';
import {Moon, Sun} from 'lucide-react-native';
import {AppThemes} from '../../utils/theme';
const ProductsScreenHeader = () => {
  const {appTheme, setAppTheme, setState, state} = useThemeStore();
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      <View
        style={{
          paddingTop: Platform.select({
            ios: 20,
            android: StatusBar.currentHeight,
          }),
          paddingBottom: Platform.select({
            android: Number(StatusBar.currentHeight) / 20,
            ios: 10,
          }),
          backgroundColor: appTheme?.button,
          ...styles.container,
        }}>
        <LogoutContexMenu />
        <TextInput
          style={{...styles.input, backgroundColor: appTheme.card}}
          placeholder="Search product..."
        />
        {!state ? (
          <TouchableOpacity
            onPress={() => {
              setAppTheme(AppThemes.light);
              setState();
            }}
            style={{
              width: 30,
              alignItems: 'center',
            }}>
            <Moon color={appTheme.secondary} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setAppTheme(AppThemes.dark);
              setState();
            }}
            style={{
              width: 30,
              alignItems: 'center',
            }}>
            <Sun color={appTheme.secondary} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    borderBottomRightRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 2,
    paddingHorizontal: 10,
    height: 100,
  },
  input: {
    height: 48,
    borderRadius: 8,
    flexGrow: 1,
    padding: 8,
    fontFamily: 'Poppins-Regular',
  },
});

export default ProductsScreenHeader;
