import {
  View,
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
} from 'react-native';
import React, {Fragment} from 'react';
import {AppText} from './AppText';
import useThemeStore from '../../data/theme-provider';
import {LucideIcon} from 'lucide-react-native';

interface Props extends TouchableOpacityProps {
  loading?: boolean;
  btnText: string;
  icon?: LucideIcon;
}

const AppButton = ({icon: Icon, ...props}: Props) => {
  const {appTheme} = useThemeStore();
  return (
    <TouchableOpacity
      disabled={props.loading}
      style={{
        height: 48,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: appTheme.button,
        borderRadius: 5,
      }}
      {...props}>
      {Icon ? (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            gap: 20,
          }}>
          <AppText
            style={{
              fontFamily: 'Poppins-SemiBold',
            }}>
            {props?.loading ? 'Loading...' : props?.btnText}
          </AppText>
          <Icon color={appTheme.text} />
        </View>
      ) : (
        <AppText
          style={{
            fontFamily: 'Poppins-SemiBold',
          }}>
          {props?.loading ? 'Loading...' : props?.btnText}
        </AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;
