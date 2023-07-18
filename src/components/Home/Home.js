import { useTranslation } from 'react-i18next'
import styles from './Home.module.scss'
import {Container, Typography} from "@mui/material";


export const Home = () => {
    const { t } = useTranslation();
        return (
            <Container>
                <Typography variant={'h1'}
                            gutterBottom
                            sx={{fontSize: '38px',  textAlign: 'center'}}

                >{t('home')}</Typography>
            </Container>
        );
}
