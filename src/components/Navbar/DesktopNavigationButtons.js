import { Box, Button } from '@mui/material'
import { NavItem } from './NavItem'
import styles from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'
import { navigationItems } from './navigationData'

export const DesktopNavigationButtons = () => {
  const { t } = useTranslation()
  return (
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            { navigationItems.map((item) => {
              return (
                    <Button sx={{ padding: 0 }} key={`${item.name} ${item.link}`}>
                        <NavItem text={t(item.name)}
                                 link={item.link}
                                 className={styles.navigationLinkHover}
                                 style={
                                    ({ isActive }) => {
                                      return { backgroundColor: isActive ? 'rgba(0, 0, 0, 0.05)' : '' }
                                    }
                                 }
                        />
                    </Button>
              )
            })}
        </Box>
  )
}
