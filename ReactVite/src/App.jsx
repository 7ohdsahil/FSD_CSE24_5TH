import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ICard from './components/ICard'

function App() {

  return (
    <div style={{border:'2px solid blue',width:'600px', height:'300px',backgroundColor:'white'}}>
      <h2 style={{color:'blue'}}>ABES ENGINEERING COLLEGE</h2>
      <h3 style={{color:'blue'}}>Roll No . - 2400320230073</h3>
      <h3 style={{color:'blue'}}>Name - Mohd Sahil</h3>
      <h3 style={{color:'blue'}}>Branch - CSE</h3>
      <h3 style={{color:'blue'}}>Section - 24</h3>
      <ICard/>
    </div>

  )
}

export default App
