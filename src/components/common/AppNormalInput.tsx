import {View, Text, TextInput, TextInputProps} from 'react-native';
import React, {FC} from 'react';
import useThemeStore from '../../data/theme-provider';
import {FieldError} from 'react-hook-form';
import {AppText} from './AppText';

interface Props extends TextInputProps {
  label: string;
  error?: FieldError;
}

const AppNormalInput: FC<Props> = ({...props}): JSX.Element => {
  const {appTheme} = useThemeStore();
  return (
    <View style={{gap: 5}}>
      <AppText>{props.label}</AppText>
      <TextInput
        placeholderTextColor={'#ccc'}
        style={{
          height: 48,
          width: '100%',
          borderColor: appTheme.border,
          borderWidth: 2,
          borderRadius: 10,
          color: appTheme.text,
          fontFamily: 'Poppins-Regular',
          paddingLeft: 10,
          paddingRight: 5,
        }}
        {...props}
      />
      {props?.error && (
        <AppText
          style={{
            color: 'red',
          }}>
          {props?.error?.message}
        </AppText>
      )}
    </View>
  );
};

export default AppNormalInput;
