import {Box, Divider, IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {NavItem} from "./NavItem";
import * as React from "react";
import {useTranslation} from "react-i18next";

export const MobileNavigationMenu = () => {
    const { t } = useTranslation();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <Box sx={{display: { xs: 'flex', md: 'none' }}}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              // id="menu-appbar"
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
              sx={{display: { xs: 'block', md: 'none'}}}
            >
                <MenuItem onClick={handleCloseNavMenu} sx={{padding: 0}}>
                    <NavItem text={t('home')} link={'/'} />
                </MenuItem>
                <Divider sx={{margin: '0 !important'}} />
                <MenuItem onClick={handleCloseNavMenu} sx={{padding: 0}}>
                    <NavItem text={t('about')} link={'/about'} />
                </MenuItem>
                <Divider sx={{margin: '0 !important'}} />
                <MenuItem onClick={handleCloseNavMenu} sx={{padding: 0}}>
                    <NavItem text={t('contact')} link={'/contact'} />
                </MenuItem>
            </Menu>
          </Box>
    )
}