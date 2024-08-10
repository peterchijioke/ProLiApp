import {
  View,
  StyleSheet,
  ImageBackground,
  ImageBackgroundProps,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {AppImages} from '../../assets';
import useThemeStore from '../../data/theme-provider';

export default ({...props}: ImageBackgroundProps) => {
  const {appTheme} = useThemeStore();
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent={true} />

      <ImageBackground
        source={AppImages.authBg}
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: appTheme.primary,
        }}
        {...props}>
        <SafeAreaView
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            ...StyleSheet.absoluteFillObject,
          }}>
          {props?.children}
        </SafeAreaView>
      </ImageBackground>
    </>
  );
};
