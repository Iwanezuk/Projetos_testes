import React, {useState, useEffect } from 'react'
import { busca } from '../api/api'
import { useNavigate, useParams } from 'react-router-dom';
import '../assets/css/post.css'

const Post = () => {
  const { id } = useParams() 
  const[post, setPost] = useState({})
  const navegar = useNavigate();
  useEffect(() => {
        // Busca o post usando o ID capturado
        busca(`/posts/${id}`, setPost)
        .catch(() => {
            // Se a busca falhar (erro 404, por exemplo), navega para a rota de erro.
            // O uso de 'useNavigate' é a forma moderna de redirecionar.
            navegar('/404');
        });
  }, [id]); // Atualiza quando o 'id' na URL muda
  return(
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <h3 className="cartao-post__meta">{post.metadescription}</h3>
        <br />
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  )
}

export default Post