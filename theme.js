// theme.js
import { MD3LightTheme as DefaultTheme } from 'react-native-paper';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#563CCC',    // Purple
    secondary: '#f06292',  // Pink
    background: '#d0e0f0', // Light pastel background
    onPrimary: '#FFFFFF',
  },
  roundness: 20,
};
