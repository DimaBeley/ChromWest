import img1 from '../../img/gallery/1.jpg'
import img2 from '../../img/gallery/2.jpg'
import img3 from '../../img/gallery/3.jpg'
import img4 from '../../img/gallery/4.jpg'
import img5 from '../../img/gallery/5.jpg'
import img6 from '../../img/gallery/6.jpg'
import img7 from '../../img/gallery/7.jpg'
import img8 from '../../img/gallery/8.jpg'
import img9 from '../../img/gallery/9.jpg'
import img10 from '../../img/gallery/10.jpg'
import img11 from '../../img/gallery/11.jpg'
import img12 from '../../img/gallery/12.jpg'
import img13 from '../../img/gallery/13.jpg'
import img14 from '../../img/gallery/14.jpg'
import img15 from '../../img/gallery/15.jpg'
import img16 from '../../img/gallery/16.jpg'
import img17 from '../../img/gallery/17.jpg'

import { IMAGE_TYPES } from '../../constants/imageTypes'

export const chromeImages = [
  {
    img: img1,
    title: 'Chrome',
    type: IMAGE_TYPES.chrome
  },
  {
    img: img2,
    title: 'Chrome',
    type: IMAGE_TYPES.chrome
  },
  {
    img: img3,
    title: 'Chrome',
    type: IMAGE_TYPES.chrome
  },
  {
    img: img4,
    title: 'Chrome',
    type: IMAGE_TYPES.chrome
  },
  {
    img: img5,
    title: 'Chrome',
    type: IMAGE_TYPES.chrome
  },
  {
    img: img6,
    title: 'Chrome',
    type: IMAGE_TYPES.chrome
  }
]
export const nickelImages = [
  {
    img: img7,
    title: 'nickel',
    type: IMAGE_TYPES.nickel
  },
  {
    img: img8,
    title: 'nickel',
    type: IMAGE_TYPES.nickel
  },
  {
    img: img9,
    title: 'nickel',
    type: IMAGE_TYPES.nickel
  },
  {
    img: img10,
    title: 'nickel',
    type: IMAGE_TYPES.nickel
  },
  {
    img: img11,
    title: 'nickel',
    type: IMAGE_TYPES.nickel
  },
  {
    img: img12,
    title: 'nickel',
    type: IMAGE_TYPES.nickel
  }
]

export const copperImages = [
  {
    img: img13,
    title: 'Copper',
    type: IMAGE_TYPES.copper
  },
  {
    img: img14,
    title: 'Copper',
    type: IMAGE_TYPES.copper
  },
  {
    img: img15,
    title: 'Copper',
    type: IMAGE_TYPES.copper
  },
  {
    img: img16,
    title: 'Copper',
    type: IMAGE_TYPES.copper
  },
  {
    img: img17,
    title: 'Copper',
    type: IMAGE_TYPES.copper
  }
]

export const allImages = [...copperImages, ...chromeImages, ...nickelImages]
