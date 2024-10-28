
import './App.css'
import Banner from './components/Banner'
import FloatingButton from './components/FloatingButton'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurGallery from './components/OurGallery'
import OurStory from './components/OurStory'
import WeddingSchedule from './components/WeddingSchedule'


function App() {
  

  return (
    <div className='w-full h-auto flex flex-col flex-wrap'>
      <header className="w-full h-[60px] flex justify-center items-center">
        <h1 className="text-[32px]">Luciana & Samuel</h1>
      </header>
      <Hero/>
      <OurStory/>
      <WeddingSchedule/>
      <Banner/>
      <OurGallery/>
      <Footer/>
      <FloatingButton/>
    </div>
  )
}

export default App
