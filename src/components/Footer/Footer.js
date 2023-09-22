import { Container, Box, Typography } from '@mui/material'
import { ThemeConstants } from '../../constants'

export const Footer = () => {
  return (
    <Container sx={{ backgroundColor: ThemeConstants.primaryColor }}>
      <Box>
        <Typography>
          Footer
        </Typography>
      </Box>
    </Container>
  )
}
