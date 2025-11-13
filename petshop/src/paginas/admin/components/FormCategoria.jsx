import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api/api";

const FormCategoria = () => {
    const navigate = useNavigate();
    const [nomeCategoria, setNomeCategoria] = useState('');

    const CadCategoria = (evento) => {
        evento.preventDefault();

        // Lógica para POST na API
        api.post(`/categorias`, {
            id: nomeCategoria, // (JSON-Server usa 'id', mas o ideal seria a API gerar o ID)
            nome: nomeCategoria,
            subcategorias: []
        })
            .then(() => {
                alert("Cadastro realizado com Sucesso!");
                navigate('/admin'); // ATUALIZAÇÃO: Navega para /admin
            });
    }
    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="titulo-pagina">Cadastro de Categorias</h2>
                <br />
                <form onSubmit={CadCategoria} >
                    <TextField
                        value={nomeCategoria}
                        onChange={evento => setNomeCategoria(evento.target.value)}
                        label="Categoria"
                        variant="filled"
                        fullWidth
                        required
                    />
                    <br />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                        fullWidth
                    >
                        Cadastrar
                    </Button>
                </form>
            </article>
        </main>
    );
}

export default FormCategoria;