import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Button,
    MenuItem,
    FormControl,
    Select,
    InputLabel
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Theme } from './theme'
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageIcon from '@mui/icons-material/Language';
import { NavItem } from './NavItem'
// import Tooltip from '@mui/material/Tooltip';
import { LANGUAGES } from '../../constants'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const { i18n, t } = useTranslation();
    const savedLang = localStorage.getItem("lang");

    const onChangeLang = (e) => {
        const lang_code = e.target.value;
        console.log(lang_code, 'lang_code');
        setCurrentLang(lang_code)
        i18n.changeLanguage(lang_code);
        localStorage.setItem("lang", lang_code);
    }
    const [currentLang, setCurrentLang] = React.useState(savedLang || 'ua')
    const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

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

              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavItem text={t('home')} link={'/'} />
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavItem text={t('about')} link={'/about'} />
                    </MenuItem>
                    <MenuItem onClick={handleCloseNavMenu}>
                        <NavItem text={t('contact')} link={'/contact'} />
                    </MenuItem>
                </Menu>
              </Box>
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
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button variant={'text'}>
                      <NavItem text={t('home')} link={'/'} />
                  </Button>
                  <Button>
                      <NavItem text={t('about')} link={'/about'} />
                  </Button>
                  <Button>
                      <NavItem text={t('contact')} link={'/contact'} />
                  </Button>
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                  <LanguageIcon sx={{position: 'relative', top: '27px', right: '2px'}} />
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 65, color: 'white' }}>
                      <Select
                        value={currentLang}
                        onChange={onChangeLang}
                        label="Language"
                        before={{border: 'none'}}
                        sx={{ my: 2, textTransform: 'uppercase', alignItems: 'center'}}
                      >
                          {LANGUAGES.map(({code}) => (
                              <MenuItem key={code} value={code}>
                                {code}
                              </MenuItem>))}
                      </Select>
                    </FormControl>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
  );
}
//
// import { NavItem } from './NavItem'

// import styles from './Navbar.module.scss'
//
// export const Navbar = () => {

//     return (
//         <div className={styles.container}>
//             <div className={styles.logo}></div>
//             <nav className={styles.nav}>
//                 <NavItem text={t('home')} link={'/'}/>
//                 <NavItem text={t('about')} link={'/about'} />
//                 <NavItem text={t('contact')} link={'/contact'} />
//             </nav>
//             <div className={styles.langSelect}>
//                 <div className={styles.icon}/>
//                 <select defaultValue={savedLang || "ua"} onChange={onChangeLang}>
//                         {LANGUAGES.map(({ code, label }) => (
//                           <option key={code} value={code}>
//                             {code}
//                           </option>
//                         ))}
//                       </select>
//             </div>
//         </div>
//     )
// }