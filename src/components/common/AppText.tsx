import {FC} from 'react';
import {Text, TextProps} from 'react-native';
import useThemeStore from '../../data/theme-provider';
interface Props extends TextProps {
  styles?: any;
}
export const AppText: FC<Props> = ({...props}) => {
  const {appTheme} = useThemeStore();
  return (
    <Text
      style={[
        {color: appTheme.text, fontFamily: 'Poppins-Regular'},
        props.style,
      ]}
      {...props}
    />
  );
};
