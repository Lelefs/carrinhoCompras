import React, { useEffect, useState } from 'react';
import api from './services/api';
import Routes from './routes';
import './App.css';

function App() {

    let qtdTotal = 0
    localStorage.setItem('qtdTotal', qtdTotal);
    let [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            const response = await api.get('/products')
            response.data.map(p =>( (p.qtd = p.qtd ? p.qtd : 0), (p.valor = `R$ ${p.price.toLocaleString('pt-BR')}`) ))
            setProdutos(response.data)
            localStorage.setItem('arrayProdutos', JSON.stringify(response.data));
        }

        carregarProdutos();
    }, []);

    return (
        <>
            <div className="menu">
                Smartphones
            </div>
            <div className="container">
                <div className="content">
                    <Routes />
                </div>
            </div>
        </>
    );
}

export default App;