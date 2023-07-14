import { Box, Button } from "@mui/material";
import { NavItem } from "./NavItem";
import styles from "./Navbar.module.scss";
import * as React from "react";
import { useTranslation } from "react-i18next";

export const DesktopNavigationButtons = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{padding: 0}}>
                <NavItem text={t('home')}
                         link={'/'}
                         className={styles.navigationLinkHover}
                         style={({isActive}) => {return {backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : ''}}}
                />
            </Button>
            <Button sx={{padding: 0}}>
                <NavItem text={t('about')}
                         link={'/about'}
                         className={styles.navigationLinkHover}
                         style={({isActive}) => {return {backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : ''}}}
                />
            </Button>
            <Button sx={{padding: 0}}>
                <NavItem text={t('contact')}
                         link={'/contact'}
                         className={styles.navigationLinkHover}
                         style={({isActive}) => {return {backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : ''}}}
                />
            </Button>
        </Box>
    )
}