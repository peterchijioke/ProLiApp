import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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
  setAppTheme: (appTheme:ITheme) => void;
}

const useThemeStore = create<ThemeProps>()(
  persist(
    (set) => ({
      appTheme: {
        primary: "#1E1E1E",
        secondary: "#121212",
        background: "#000000",
        card: "#2A2A2A",
        text: "#FFFFFF",
        button: "#BB86FC",
        border: "#3E3E3E",
        notification: "#FF5722"
      },
      setAppTheme: (appTheme) => set(() => ({ appTheme })),
    }),
    {
      name: 'theme-storage', 
    }
  )
);

export default useThemeStore;
