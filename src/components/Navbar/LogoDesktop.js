import { Box } from "@mui/material";
import logo from '../../img/ChromwestLogo.png'

export const LogoDesktop = () => {
 return (
     <Box component={'div'}
          sx={{
              height: '70px',
              display: { xs: 'none', md: 'flex' },
              backgroundImage: `url(${logo})`,
              backgroundSize: 'cover',
              width: '120px',
          }}>

     </Box>
 )
}