import * as React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
} from '@mui/material';
import { LanguageSelect } from "./LanguageSelect";
import { MobileNavigationMenu } from "./MobileNavigationMenu";
import { DesktopNavigationButtons } from "./DesktopNavigationButtons";
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './theme'
import AdbIcon from '@mui/icons-material/Adb';


export const Navbar = () => {

  return (
      <ThemeProvider theme={Theme}>
        <AppBar position="static" color={'primary'}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
                <MobileNavigationMenu />
              <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <DesktopNavigationButtons />
              <LanguageSelect />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
  );
}
