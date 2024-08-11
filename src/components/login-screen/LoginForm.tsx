import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View, Button} from 'react-native';
import AppNormalInput from '../common/AppNormalInput';
import AppPasswordInput from '../common/AppPasswordInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {LoginFormInputs, loginSchema} from '../../zod/login-schema';
import AppButton from '../common/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppToast, {ToastEnum} from '../../utils/AppToast';
import {ProductsScreenName} from '../../screens/ProductsScreen';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {decryptPassword} from '../../utils';
import {AppText} from '../common/AppText';
import {RegisterScreenName} from '../../screens/RegisterScreen';
import useThemeStore from '../../data/theme-provider';

function LoginForm() {
  const {setIsUserLogin} = useThemeStore();
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    setValue,
    formState: {errors},
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    setIsLoading(true);
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user) {
        const userObject = JSON.parse(user);
        const decryptedPassword = userObject?.password;
        // decryptPassword(userObject?.password);
        if (
          userObject?.email === data?.email &&
          decryptedPassword !== data.password
        ) {
          setIsLoading(false);

          AppToast(`Either email or password is incorrect...`, ToastEnum.error);
          return;
        }
        if (
          userObject?.email !== data?.email &&
          decryptedPassword === data.password
        ) {
          setIsLoading(false);
          AppToast(`Either email or password is incorrect...`, ToastEnum.error);
          return;
        }

        if (
          userObject?.email === data?.email &&
          decryptedPassword === data.password
        ) {
          setTimeout(async () => {
            setIsUserLogin();
            setIsLoading(false);
            AppToast(`Login successful...`, ToastEnum.success);
            navigation.navigate(ProductsScreenName as never);
          }, 7000);
          return;
        }
      } else {
        setIsLoading(false);
        AppToast(
          `User does not exist please register to continue...`,
          ToastEnum.info,
        );
        return;
      }
    } catch (error: any) {
      setIsLoading(false);
      AppToast(error?.message as string, ToastEnum.error);
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const user = await AsyncStorage.getItem('@user');
        if (user) {
          let obj = JSON.parse(user);
          setValue('email', obj?.email ?? '');
          setValue('password', '');
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <View style={{padding: 18, height: '100%', width: '100%', gap: 35}}>
      <View
        style={{
          gap: 20,
        }}>
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <AppNormalInput
              error={errors.email}
              label="Email Address"
              placeholder="Email Address"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({field: {onChange, onBlur, value}}) => (
            <AppPasswordInput
              error={errors.password}
              label="Password"
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <AppText>
          Don't have an account?{' '}
          <AppText
            onPress={() => {
              navigation.navigate(RegisterScreenName as never);
            }}
            style={{
              textDecorationLine: 'underline',
            }}>
            {'Register'}
          </AppText>
        </AppText>
      </View>
      <View
        style={{
          marginTop: '10%',
        }}>
        <AppButton
          loading={isLoading}
          btnText="Login"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

export default LoginForm;
