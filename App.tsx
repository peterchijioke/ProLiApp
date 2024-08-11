import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainRoute from './src/routes/MainRoute';
import Toast from 'react-native-toast-message';
import {View} from 'react-native';
import {AppText} from './src/components/common/AppText';
import useThemeStore from './src/data/theme-provider';
import {MenuProvider} from 'react-native-popup-menu';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const {appTheme} = useThemeStore();

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [loading]);

  if (loading) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: appTheme.background,
          flex: 1,
        }}>
        <AppText
          style={{
            fontSize: 24,
            fontFamily: 'Poppins-Bold',
            color: appTheme.button,
          }}>
          ProLiApp
        </AppText>
      </View>
    );
  }
  return (
    <React.Fragment>
      <MenuProvider>
        <NavigationContainer>
          <MainRoute />
        </NavigationContainer>
      </MenuProvider>
      <Toast />
    </React.Fragment>
  );
}
