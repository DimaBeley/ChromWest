import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Container, Box, ImageListItem, ImageList, Typography, Modal, ButtonGroup, Button } from '@mui/material'
import { allImages } from './galleryImages'
import { IMAGE_TYPES } from '../../constants/imageTypes'
import styles from './Home.module.scss'

// TODO uninstall swiper
export const Home = () => {
  const [open, setOpen] = useState(null)
  const [imageFilter, setFilter] = useState(null)
  const handleOpen = (id) => setOpen(id)
  const handleClose = () => setOpen(null)
  const filteredImageList = (arr, filterType) => {
    return filterType ? arr.filter(item => item.type === filterType) : arr
  }

  const { t } = useTranslation()
  return (
    <Container>
      <Box sx={{ marginTop: '25px' }}>
        <Typography variant={'h1'}
                    gutterBottom
                    sx={{ fontSize: '38px', textAlign: 'center', fontWeight: 'bold' }}

        >{t('gallery')}</Typography>
      </Box>
      <Box sx={{ marginTop: '15px', textAlign: 'center' }}>
        <ButtonGroup variant="text" aria-label="Image Filter">
          <Button style={{ backgroundColor: `${imageFilter === null ? 'rgba(0, 0, 0, 0.2)' : ''}` }}
                  onClick={() => setFilter(null)}
          >
            {t('all')}
          </Button>
          <Button onClick={() => setFilter(IMAGE_TYPES.chrome)}
                  style={{ backgroundColor: `${imageFilter === IMAGE_TYPES.chrome ? 'rgba(0, 0, 0, 0.2)' : ''}` }}

          >
            {t('chrome')}
          </Button>
          <Button onClick={() => setFilter(IMAGE_TYPES.copper)}
                  style={{ backgroundColor: `${imageFilter === IMAGE_TYPES.copper ? 'rgba(0, 0, 0, 0.2)' : ''}` }}
          >
            {t('copper')}
          </Button>
          <Button onClick={() => setFilter(IMAGE_TYPES.nickel)}
                  style={{ backgroundColor: `${imageFilter === IMAGE_TYPES.nickel ? 'rgba(0, 0, 0, 0.2)' : ''}` }}
          >
            {t('nickel')}
          </Button>
        </ButtonGroup>
      </Box>
      <Box sx={{ width: '100%', alignItems: 'center' }}>
        <ImageList variant="masonry" cols={4} gap={8}>
          {filteredImageList(allImages, imageFilter).map((item) => (
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
                    key={`${item.img} ${item.type}`}

                >
                  <Box className={styles.modalStyle}>
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
