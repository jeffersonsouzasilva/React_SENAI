import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter, Routes } from 'react-router-dom'

// import App from './App'
import './index.css'
import Home from './pages/Home'
import Header from './components/Header'
import ListaServicos from './pages/ListaServicos'
import Footer from './components/Footer'



// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode> 
//     <Header/> 
//     {/* <Home /> */}
//     <ListaServicos/>
//     <Footer/>
    
//   </React.StrictMode>
// )

// quando der erro temos sugestoes para corrigir com ctrl + .



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='ListaServicos' element={<ListaServicos/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
)