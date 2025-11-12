import { useParams } from 'react-router-dom';
import ListaPost from '../components/ListaPost';

const CategoriaPosts = () => { 
  // Captura o parâmetro :id da URL (que vem da rota pai)
  const { id } = useParams();
  
  return(
    // Renderiza o ListaPost com a URL de busca filtrada pela categoria principal
    <ListaPost url={`/posts?categoria=${id}`} />
  )
}

export default CategoriaPosts;