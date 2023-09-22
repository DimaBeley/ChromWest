import { createTheme } from '@mui/material/styles'
import { ThemeConstants } from '../../constants'

export const Theme = createTheme({
  palette: {
    primary: {
      main: ThemeConstants.primaryColor
    },
    secondary: {
      main: ThemeConstants.secondaryColor
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          ul: {
            padding: 0
          }
        }
      }
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          margin: 0,
          ':hover': {
            ':before': {
              borderBottom: '1px solid black !important'
            }
          },
          ':before': {
            border: 'none'
          },
          ':after': {
            border: 'none'
          },
          '& :focus': {
            borderRadius: '4px !important'
          }
        }
      }
    }
  }
})
