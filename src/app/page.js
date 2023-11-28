import About from './components/About'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import Services from './components/Services'

export default function Home() {
  return (
    <main className='w-screen'>
      <Navbar />
      <Main />
      <Services />
      <About />
      <Carousel />
      <Footer />
    </main>
  )
}
