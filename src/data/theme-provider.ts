import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type ITheme={
   primary: string;
  secondary: string;
  background: string;
  card: string;
  text: string;
  button: string;
  border: string;
  notification: string;
}
interface ThemeProps {
  appTheme: ITheme;
  isUserLogin:boolean;
  state:boolean;
  setState:()=>void
  setIsUserLogin:()=>void
  setAppTheme: (appTheme:ITheme) => void;
}

const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      state:true,
      isUserLogin:false,
      appTheme: {
          primary: "#238585",
          secondary: "#EEEEEE",
          background: "#FFFFFF",
          card: "#FAFAFA",
          text: "#000000",
          button: "#238585",
          border: "#DDDDDD",
          notification: "#FF9800",
      },
      setAppTheme: (appTheme) => set(() => ({ appTheme })),
      setState: () => set((state) => ({ state:!state.state })),
      setIsUserLogin: () => set((state) => ({ isUserLogin:!state.isUserLogin })),

    }),
    {
      name: 'theme-storage', 
     storage: createJSONStorage(() => AsyncStorage)
    }
  )
);

export default useThemeStore;
