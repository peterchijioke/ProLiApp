import {View, Text, TextInputProps, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FieldError} from 'react-hook-form';
import useThemeStore from '../../data/theme-provider';
import {Eye, EyeOff} from 'lucide-react-native';
import {AppText} from './AppText';

interface Props extends TextInputProps {
  label: string;
  error?: FieldError;
}

const AppPasswordInput = ({...props}: Props): JSX.Element => {
  const [state, setState] = useState<boolean>(true);
  const {appTheme} = useThemeStore();
  return (
    <View style={{width: '100%', gap: 5}}>
      <AppText>{props.label}</AppText>
      <View style={{...styles.wrapper, borderColor: appTheme.border}}>
        <TextInput
          secureTextEntry={state}
          placeholderTextColor={'#ccc'}
          style={{...styles.input, color: appTheme.text}}
          {...props}
        />
        {state ? (
          <EyeOff
            size={20}
            color={appTheme.button}
            onPress={() => setState(false)}
          />
        ) : (
          <Eye
            size={20}
            color={appTheme.button}
            onPress={() => setState(true)}
          />
        )}
      </View>
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

const styles = StyleSheet.create({
  input: {
    width: '90%',
    height: '100%',
    fontFamily: 'Poppins-Regular',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingLeft: 8,
    paddingRight: 8,
    borderWidth: 2,
    borderRadius: 10,
    gap: 5,
  },
});

export default AppPasswordInput;
