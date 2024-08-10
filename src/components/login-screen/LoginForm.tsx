import React, {useState} from 'react';
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

function LoginForm() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [isLoading, setIsLoading] = useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const user = await AsyncStorage.getItem('@user');
      if (user) {
        const userObject = JSON.parse(user);
        const decryptedPassword = decryptPassword(
          userObject?.password as string,
        );
        if (
          userObject?.email === data?.email &&
          decryptedPassword !== data.password
        ) {
          AppToast(`Either email or password is incorrect...`, ToastEnum.error);
          return;
        }
        if (
          userObject?.email !== data?.email &&
          decryptedPassword === data.password
        ) {
          AppToast(`Either email or password is incorrect...`, ToastEnum.error);
          return;
        }

        if (
          userObject?.email === data?.email &&
          decryptedPassword === data.password
        ) {
          setTimeout(() => {
            setIsLoading(false);
            navigation.replace(ProductsScreenName);
          }, 10000);
          return;
        } else {
          AppToast(
            `User does not exist please register to continue...`,
            ToastEnum.info,
          );
          return;
        }
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
