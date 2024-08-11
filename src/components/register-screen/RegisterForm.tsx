import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {View} from 'react-native';
import AppNormalInput from '../common/AppNormalInput';
import AppPasswordInput from '../common/AppPasswordInput';
import {zodResolver} from '@hookform/resolvers/zod';
import AppButton from '../common/AppButton';
import {RegisterFormInputs, registerSchema} from '../../zod/register-schema';
import AppToast, {ToastEnum} from '../../utils/AppToast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {LoginScreenName} from '../../screens/LoginScreen';
import {encryptPassword} from '../../utils';
import {AppText} from '../common/AppText';

function RegisterForm() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    setValue,
    handleSubmit,
    formState: {errors},
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormInputs) => {
    const encPass = data.password;

    // encryptPassword(data?.password);
    console.log(encPass, '=enc pass');

    setIsLoading(true);
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user) {
        const userObject = JSON.parse(user);
        if (userObject?.email === data?.email) {
          setIsLoading(false);
          AppToast(
            `User with email: ${data?.email} already exist, Please login`,
            ToastEnum.info,
          );
          return;
        } else {
          await AsyncStorage.setItem(
            '@user',
            JSON.stringify({
              ...data,
              password: encPass,
            }),
          );
          setTimeout(() => {
            AppToast('Registration successful...', ToastEnum.success);
            setIsLoading(false);
            navigation.navigate(LoginScreenName as never);
          }, 7000);
        }
      } else {
        await AsyncStorage.setItem(
          '@user',
          JSON.stringify({
            ...data,
            password: encPass,
          }),
        );
        setTimeout(() => {
          AppToast('Registration successful...', ToastEnum.success);

          setIsLoading(false);
          navigation.navigate(LoginScreenName as never);
        }, 7000);
      }
    } catch (error: any) {
      setIsLoading(false);
      AppToast(error?.message as string, ToastEnum.error);
    }
  };

  return (
    <View style={{padding: 18, height: '100%', width: '100%', gap: 35}}>
      <View
        style={{
          gap: 20,
        }}>
        <Controller
          control={control}
          name="fullName"
          render={({field: {onChange, onBlur, value}}) => (
            <AppNormalInput
              error={errors.fullName}
              label="Full Name"
              placeholder="Full Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({field: {onChange, onBlur, value}}) => (
            <AppNormalInput
              error={errors.email}
              keyboardType="email-address"
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
          Already have an account?{' '}
          <AppText
            onPress={() => {
              navigation.navigate(LoginScreenName as never);
            }}
            style={{
              textDecorationLine: 'underline',
            }}>
            {'Login'}
          </AppText>
        </AppText>
      </View>

      <View
        style={{
          marginTop: '10%',
        }}>
        <AppButton
          loading={isLoading}
          btnText="Submit"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
}

export default RegisterForm;
