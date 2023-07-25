import { Box } from "@mui/material";
import logo from '../../img/ChromwestLogo.png'

export const LogoMobile = () => {
 return (
     <Box component={'div'}
          sx={{
              height: '70px',
              display: { xs: 'flex', md: 'none' },
              backgroundImage: `url(${logo})`,
              backgroundSize: 'cover',
              width: '120px',
              marginLeft: '11%',
          }}>
     </Box>
 )
}