import Main from './components/Main'
import Navbar from './components/Navbar'
import Services from './components/Services'

export default function Home() {
  return (
    <main className='w-screen'>
      <Navbar />
      <Main />
      <Services />
    </main>
  )
}
