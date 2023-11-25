import { useTranslation } from 'react-i18next'
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem
} from '@mui/material'

import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg'

import { NavItem } from '../Navbar/NavItem'

export const About = () => {
  const { t } = useTranslation()
  return (
    <Container maxWidth={'lg'}>
      <Box sx={{ marginTop: '25px', width: '100%' }}>
        <Typography variant={'h1'}
                    gutterBottom
                    sx={{ fontSize: '38px', textAlign: 'center', fontWeight: 'bold' }}>
          {t('about')}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ marginTop: '15px', width: '100%' }}>
        <Typography variant={'h6'} sx={{ marginBottom: '15px' }}>
          {t('aboutGreetings')}
        </Typography>
        <Typography variant={'h6'} sx={{ marginBottom: '15px' }}>
          {t('aboutText1')}
        </Typography>
        <Typography variant={'h5'}>
          {t('aboutTextTypes')}
        </Typography>
        <List>
          <ListItem sx={{ padding: '0' }}>
            <Typography variant={'h6'} >
              &nbsp;&nbsp;- {t('aboutDimensionsLength')}
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: '0' }}>
            <Typography variant={'h6'}>
              &nbsp;&nbsp;- {t('aboutDimensionsWidth')}
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: '0' }}>
            <Typography variant={'h6'}>
              &nbsp;&nbsp;- {t('aboutDimensionsThickness')}
            </Typography>
        </ListItem>
        </List>
        <Typography variant={'h6'} sx={{ marginBottom: '15px' }}>
          {t('aboutEndingText')}
        </Typography>
        <Typography variant={'h5'} sx={{ marginBottom: '25px' }}>
          {t('aboutEndText')}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', justifyContent: 'center', margitTop: '25px' }}>
          <Typography variant={'h4'}>
              <PermPhoneMsgIcon /><NavItem text={`${t('contact')} ${t('us')}`} link={'/contact'} />
          </Typography>
      </Box>
    </Container>
  )
}
