import axios from 'axios';

// 1. Exporta a instância base do Axios
export const api = axios.create({
  baseURL: 'http://localhost:5000' // Endereço do Servidor JSON
})

// 2. Função de busca genérica assíncrona
// Recebe a URL (ex: '/posts' ou '/categorias') e um callback opcional para o sucesso.
export const busca = async (url, setDado) => { 
    // A busca é feita a partir da instância da API
    const resposta = await api.get(url)

    // Atualiza o estado com os dados recebidos (se um callback foi fornecido)
    setDado(resposta.data)
}