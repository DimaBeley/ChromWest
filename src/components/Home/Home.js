import { useTranslation } from 'react-i18next'
import { Container, Typography, Box } from '@mui/material'
import { Navigation, Pagination, Scrollbar, A11y, Controller } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const Home = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Box sx={{ marginTop: '25px', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          style={{ width: '800px', height: '400px' }}
        >
          <SwiperSlide >Slide 1</SwiperSlide>
          <SwiperSlide >Slide 2</SwiperSlide>
          <SwiperSlide >Slide 3</SwiperSlide>
          <SwiperSlide >Slide 4</SwiperSlide>
          <SwiperSlide >Slide 5</SwiperSlide>
          <SwiperSlide >Slide 6</SwiperSlide>
          <SwiperSlide >Slide 7</SwiperSlide>
          <SwiperSlide >Slide 8</SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  )
}
