// theme.js
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8A2BE2',    // Purple
    secondary: '#FF69B4',  // Pink
    background: '#E8ECF4', // Light pastel background
    onPrimary: '#FFFFFF',
  },
  roundness: 20,
};
