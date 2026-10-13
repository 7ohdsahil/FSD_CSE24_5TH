// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
// import ICard from './components/ICard'
// import ICardGallery from './components/ICardGallery'

// function App() {

//   return (
//     <div style={{border:'2px solid blue',width:'600px', height:'500px',backgroundColor:'black'}}>
//       <ICardGallery />
//     </div>

//   )
// }

// export default App


import { useState } from 'react';
import ImageManipulation from './components/ImageManipulation';
import MyUseEffect from './components/MyUseEffect';
import FetchProducts from './components/FetchProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Dashboard from './components/Dashboard';
import Home from './components/Home';

function App() {
return (
    <div>
      <BrowserRouter>
      
      <Routes>

        <Route path='/login' element={<Login />}> </Route>
        <Route path='/register' element={<Registration />}> </Route>
        <Route path='/dashboard' element={<Dashboard />}> </Route>
        <Route path='/' element={<Home />}> </Route>



      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;