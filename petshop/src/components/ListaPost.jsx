import { useState, useEffect } from "react";
import { busca } from '../api/api.js';
import { Link } from 'react-router-dom';

const ListaPost = ({ url }) => { // Recebe a URL via props
    const [posts, setPosts] = useState([])
    useEffect(() => {
        // A busca é feita baseada na 'url' que pode ser /posts ou /posts?categoriaId=X
        busca(url, setPosts)
    }, [url]) // O useEffect roda novamente sempre que a 'url' mudar
    return (
        <section className="posts container">
            {
                posts.map((post) => (
                    // Adicione a key no elemento mais externo sendo iterado (o Link)
                    <Link className={`cartao-post cartao-post--${post.categoria}`} to={`/posts/${post.id}`} >
                        <article key={post.id}>
                            <h3 className="cartao-post__titulo">
                                {post.title}
                            </h3>
                            <p className="cartao-post__meta">
                                {post.metadescription}
                            </p>
                        </article>
                    </Link>
                ))
            }
        </section>
    )
}

export default ListaPost