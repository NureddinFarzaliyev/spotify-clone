import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/home'
import Nav from './components/nav/nav'
import HomeNav from './components/top-nav/top-nav'
import Player from './components/player/player'

function App() {
  return (
    <div className="App w-[100vw]">
      <BrowserRouter>
        <Nav />
        <HomeNav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  )
}

export default App
