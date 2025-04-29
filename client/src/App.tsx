import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LoginPage } from './pages/Login';
import { LandingPage } from './pages/Landing';
import { ProblemsPage } from './pages/Problems';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/topic/:topic' element={<ProblemsPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
