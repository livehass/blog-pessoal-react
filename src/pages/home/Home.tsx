import React from 'react';
import homeLogo from '../../assets/home.png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
        <div className="dark:bg-gray-700 flex justify-center mt-10">
          <div className='container grid grid-cols-2 text-white '>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'>Bem vindo ao meu blog pessoal!</h2>
              <p className='text-xl'>Expresse aqui seus pensamentos e opniões</p>
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <button  className='border rounded px-4 bg-blue-700  hover:text-blue-900 hover:bg-white py-2'>
                <Link to='/postagens' className='hover:underline'>Postagens</Link>
              </button>
              
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src="/src/assets/proglogo.png" alt="logo principal menu" className='w-2/3' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;