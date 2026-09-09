import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'
import ICardGallery from './components/ICardGallery'

function App() {

  return (
    <div style={{border:'2px solid blue',width:'600px', height:'500px',backgroundColor:'black'}}>
      <ICardGallery />
    </div>

  )
}

export default App
