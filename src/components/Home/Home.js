import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Box, ImageListItem, ImageList, Typography, Modal } from '@mui/material'
import { chromeImage, nikelImages } from './galleryImages'

// TODO uninstall swiper
export const Home = () => {
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    maxHeight: 750,
    bgcolor: 'background.paper',
    boxShadow: 24,
    padding: '4px 4px 0 4px',
    overflow: 'hidden',
    outline: 'none'
  }

  const allImages = [...chromeImage, ...nikelImages]
  const [open, setOpen] = useState(null)
  const handleOpen = (id) => setOpen(id)
  const handleClose = () => setOpen(null)

  const { t } = useTranslation()
  return (
    <Container>
      <Box sx={{ marginTop: '25px' }}>
        <Typography variant={'h1'}
                    gutterBottom
                    sx={{ fontSize: '38px', textAlign: 'center', fontWeight: 'bold' }}

        >{t('gallery')}</Typography>
      </Box>
      <Box sx={{ width: '100%', alignItems: 'center' }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {allImages.map((item) => (
              <>
                <ImageListItem key={item.img} onClick={() => handleOpen(item.img)} sx={{ overflow: 'hidden' }}>
                  <img
                      srcSet={`${item.img}`}
                      src={`${item.img}`}
                      alt={item.title}
                      loading="lazy"
                  />
                </ImageListItem>
                <Modal
                    open={open === item.img}
                    onClose={handleClose}

                >
                  <Box sx={modalStyle}>
                    <img src={item.img}
                         alt={item.title}
                         loading="lazy"
                         style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                         onClick={handleClose}
                    />
                  </Box>
                </Modal>
              </>
          ))}
        </ImageList>
      </Box>
    </Container>
  )
}
