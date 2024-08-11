import {View, Text} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import {EllipsisVertical, LogOut} from 'lucide-react-native';
import {AppText} from '../common/AppText';
import useThemeStore from '../../data/theme-provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppToast, {ToastEnum} from '../../utils/AppToast';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenName} from '../../screens/LoginScreen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {FavoriteProductsScreenName} from '../../screens/FavouriteProductsScreen';

type Props = {};

const LogoutContexMenu = (props: Props) => {
  const {appTheme, setAuthUser} = useThemeStore();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleLogout = async () => {
    try {
      setAuthUser(null);
    } catch (error: any) {
      AppToast(error?.message as string, ToastEnum.error);
    }
  };

  return (
    <Menu style={{}}>
      <MenuTrigger
        style={{
          width: 30,
          height: 30,
        }}>
        <EllipsisVertical color={appTheme.secondary} />
      </MenuTrigger>
      <MenuOptions
        optionsContainerStyle={{
          marginTop: '10%',
          backgroundColor: appTheme.card,
          borderRadius: 5,
          paddingLeft: 5,
        }}>
        <MenuOption
          style={{
            height: 40,
            // alignItems: 'center',
            justifyContent: 'center',
          }}
          onSelect={handleLogout}>
          <AppText
            style={{
              color: appTheme.button,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Logout
          </AppText>
        </MenuOption>
        <MenuOption
          onSelect={() => {
            navigation.navigate(FavoriteProductsScreenName);
          }}
          style={{
            height: 40,
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppText
            style={{
              color: appTheme.button,
              fontFamily: 'Poppins-SemiBold',
            }}>
            Favorite Product
          </AppText>
        </MenuOption>
      </MenuOptions>
    </Menu>
  );
};

export default LogoutContexMenu;
