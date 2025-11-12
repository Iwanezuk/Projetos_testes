import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { busca } from '../api/api.js';
import '../assets/css/blog.css';

const ListaCategorias = () => {
    // Estado para armazenar o array de categorias
    const [categorias, setCategorias] = useState([]); 

    // Efeito para buscar as categorias uma vez ao montar o componente
    useEffect(() => {
        // A busca é feita no endpoint '/categorias' da API
        busca(`/categorias`, setCategorias);
    }, []); 

    return(
        <ul className="lista-categorias container flex">
            {
                // Mapeia o array de categorias para criar os elementos de link
                categorias.map((categoria) => (
                    // O Link é o elemento de roteamento. O 'to' define a URL: /categoria/id
                    <Link to={`/categoria/${categoria.id}`} key={categoria.id}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )
}

export default ListaCategorias;