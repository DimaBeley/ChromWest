import { createTheme, createStyles } from '@mui/material/styles';

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#bdbdbd',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  components : {
    MuiSelect: {
      styleOverrides: {
        root: {
          ':before': {
              border: 'none'
          },
          ':after': {
            border: 'none'
          },
          '& :focus': {
            borderRadius: '4px !important',
          },
        }
      }
    },
  },
});