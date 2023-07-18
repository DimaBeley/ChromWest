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
import {LogoMobile} from "./LogoMobile";
import {LogoDesktop} from './LogoDesktop';
import { Theme } from './theme'


export const Navbar = () => {
  return (
      <ThemeProvider theme={Theme}>
        <AppBar position="static" color={'primary'}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <LogoDesktop />
                <MobileNavigationMenu />
                <LogoMobile />
              <DesktopNavigationButtons />
              <LanguageSelect />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
  );
}
