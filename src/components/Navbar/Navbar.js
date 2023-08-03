import {
  AppBar,
  Toolbar,
  Container
} from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import { LanguageSelect } from './LanguageSelect'
import { MobileNavigationMenu } from './MobileNavigationMenu'
import { DesktopNavigationButtons } from './DesktopNavigationButtons'
import { ThemeProvider } from '@mui/material/styles'
import { LogoMobile } from './LogoMobile'
import { LogoDesktop } from './LogoDesktop'
import { Theme } from './theme'

export const Navbar = () => {
  const matches = useMediaQuery('(min-width:600px)')
  return (
      <ThemeProvider theme={Theme}>
        <AppBar position="static" color={'primary'}>
          <Container maxWidth="xl" disableGutters={!matches}>
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              <LogoDesktop />
                <MobileNavigationMenu />
                <LogoMobile />
              <DesktopNavigationButtons />
              <LanguageSelect />
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
  )
}
