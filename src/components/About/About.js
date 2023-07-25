import { useTranslation } from 'react-i18next'
import {
    Container,
    Typography,
    Box,
    Divider,
    List,
    ListItem,
} from "@mui/material";

import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';

import { NavItem } from "../Navbar/NavItem";
import * as React from "react";

export const About = () => {
    const { t } = useTranslation();
    return (
        <Container maxWidth={'lg'}>
            <Box sx={{marginTop: '25px', width: '100%'}}>
                <Typography variant={'h1'}
                            gutterBottom
                            sx={{fontSize: '38px',  textAlign: 'center', fontWeight: 'bold'}}>
                    {t('about')}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{marginTop: '15px', width: '100%'}}>
                <Typography variant={'h6'} sx={{marginBottom: '15px'}}>
                    {t('aboutGreetings')}
                </Typography>
                <Typography variant={'h6'} sx={{marginBottom: '15px'}}>
                    {t('aboutText1')}
                </Typography>
                <Typography variant={'h5'}>
                    {t('aboutTextTypes')}
                </Typography>
                <List>
                    <ListItem>
                        <Typography variant={'h6'}>
                            - {t('aboutDimensionsLength')}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant={'h6'}>
                            - {t('aboutDimensionsWidth')}
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant={'h6'}>
                            - {t('aboutDimensionsThickness')}
                        </Typography>
                    </ListItem>
                </List>
                <Typography variant={'h6'} sx={{marginBottom: '15px'}}>
                    {t('aboutEndingText')}
                </Typography>
                <Typography variant={'h5'} sx={{marginBottom: '25px'}}>
                    {t('aboutEndText')}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{display: 'flex', justifyContent: 'center', margitTop: '25px'}}>
                <Typography variant={'h4'}>
                    <PermPhoneMsgIcon /><NavItem text={`${t('contact')} ${t('us')}`} link={'/contact'} />
                </Typography>
            </Box>
        </Container>
    );
}
