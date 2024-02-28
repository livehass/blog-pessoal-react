import React from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
<div className="m-10 max-w-sm">
  <div className="rounded-lg borderb bg-black dark:bg-gray-900 px-4 pt-8 pb-10 shadow-lg">
    <div className="relative mx-auto w-36 rounded-full">
      <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2" />
      <img
        className="mx-auto h-auto w-full rounded-full"
        src={post.usuario?.foto}
        alt="foto-usuario"
      />
    </div>
    <h1 className="my-1 text-center text-x2 font-bold leading-8 text-white hover:text-blue-600">
      {post.usuario?.nome}
    </h1>
    <h3 className="font-lg text-semibold text-center leading-6 text-lg text-white  ">
    {post.titulo}
    </h3>
    <p className="text-center text-sm leading-6 text-white hover:text-blue-600">
    {post.texto}
    </p>
    <ul className="mt-3 divide-y rounded dark:bg-gray-700 py-2 px-3 text-white shadow-sm hover:text-blue-700 hover:bg-white hover:shadow">
      <li className="flex items-center py-1 text-sm ">
      Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}
        
      </li>
    </ul>
    <Link to={`/editarPostagem/${post.id}`} className='m-3 ml-5 inline-flex items-center justify-center rounded-xl border border-transparent bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='m-3 ml-5 inline-flex items-center justify-center rounded-xl border bg-white px-6 py-3 font-medium text-blue-600 shadow hover:bg-blue-50'>
          <button>Deletar</button>
        </Link>
  </div>
</div>

  )
}

export default CardPostagem