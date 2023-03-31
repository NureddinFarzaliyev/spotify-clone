import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/home'
import Search from './components/search/search'

import Nav from './components/nav/nav'
import HomeNav from './components/top-nav/top-nav'
import Player from './components/player/player'
import MobilePlayer from './components/mobile-player/mobile-player'

function App() {
  return (
    <div className="App w-[100vw]">
      <BrowserRouter>
        <Nav />
        <HomeNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
        </Routes>
        <Player />
        <MobilePlayer />
      </BrowserRouter>
    </div>
  )
}

export default App
