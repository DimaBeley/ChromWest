import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, AboutPage, ContactPage, GalleryPage } from './pages'
import { Navbar } from './components/Navbar'
// import { Footer } from './components/Footer'
import './translations/i18n'

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path={'about'} element={<AboutPage />} />
        <Route path={'contact'} element={<ContactPage />} />
        <Route path={'gallery'} element={<GalleryPage />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>

  )
}
