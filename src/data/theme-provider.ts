import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ITheme = {
  primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  button: string;
  border: string;
  notification: string;
};

interface ThemeProps {
  appTheme: ITheme;
  loginUser: any;
  state: boolean;
  setState: () => void;
  setAuthUser: (user: any) => void;
  setAppTheme: (appTheme: ITheme) => void;
}

const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      state: true,
      loginUser: null,
      appTheme: {
        primary: '#238585',
        secondary: '#EEEEEE',
        background: '#FFFFFF',
        card: '#FAFAFA',
        text: '#000000',
        button: '#238585',
        border: '#DDDDDD',
        notification: '#FF9800',
      },
      setAppTheme: (appTheme) => set(() => ({ appTheme })),
      setState: () => set((state) => ({ state: !state.state })),
      setAuthUser: (user) => set(() => ({ loginUser: user })), 
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useThemeStore;
