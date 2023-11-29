import { Container, Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

// TODO uninstall swiper
export const Home = () => {
  const { t } = useTranslation()

  return (
    <Container>
       <Box sx={{ marginTop: '25px' }}>
           <Typography variant={'h1'}
                     gutterBottom
                     sx={{ fontSize: '38px', textAlign: 'center', fontWeight: 'bold' }}
           >{t('home')}</Typography>
       </Box>
    </Container>
  )
}
