import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/home'
import Nav from './components/nav/nav'

function App() {
  return (
    <div className="App flex">
      <Nav />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
