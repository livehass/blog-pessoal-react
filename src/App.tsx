import React from 'react';
import './App.css';
import Navbar from './components/NavBar/NavBar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
<<<<<<< HEAD
import Cadastro from './pages/cadastro/Cadastro';
import Home from './pages/home/Home';
import { AuthProvider } from './contexts/AuthContext';

=======
>>>>>>> d6e7d6e4ae343249b24aac52f10722c21c11fbac

function App() {
  return (
    <>
<<<<<<< HEAD
    <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
=======
    <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
>>>>>>> d6e7d6e4ae343249b24aac52f10722c21c11fbac
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
<<<<<<< HEAD
        </AuthProvider>
=======
>>>>>>> d6e7d6e4ae343249b24aac52f10722c21c11fbac
    </>
  );
}
export default App;