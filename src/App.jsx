import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home/home'
import Nav from './components/nav/nav'
import HomeNav from './components/top-nav/top-nav'

function App() {
  return (
    <div className="App flex w-[100vw]">
      <BrowserRouter>
        <Nav />
        <HomeNav />


        {/* Routing */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
