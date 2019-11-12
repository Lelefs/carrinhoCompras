import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import carrinho from '../../assets/carrinho.svg';

export default function Dashboard({ history }) {

    const [produtos, setProdutos] = useState([]);
    let qtdTotal = localStorage.getItem('qtdTotal');

    useEffect(() => {
        async function carregarProdutos() {
            const response = await api.get('/products')
            setProdutos(response.data);
        }

        carregarProdutos();
    }, []);

    function handleSubmit(produto) {
        history.push(`/produto/${produto.id}`);
        localStorage.setItem('produto_id', produto.id);
        produto.valor = `R$ ${produto.price.toLocaleString('pt-BR')}`;
        produto.qtd = produto.qtd ? produto.qtd : 0
        localStorage.setItem('produto', JSON.stringify(produto));
    }

    function handleCart() {
        history.push('/carrinho')
    }

    return (
        <>
            <div className="divCarrinho" onClick={() => handleCart()}>
                <img src={carrinho} alt="Carrinho de compras" />
                <label id="idQtd">{qtdTotal ? qtdTotal : 0}</label>
            </div>
            <ul className="lista-produtos">
                {produtos.map(produto => (
                    <li key={produto.id} onClick={() => handleSubmit(produto)}>
                        <header style={{backgroundImage: `url(${produto.picture})`}} />
                        <strong>{produto.title}</strong>
                        <span>R$ {(produto.price).toLocaleString('pt-BR')}</span>
                    </li>
                ))}
            </ul>
        </>
    )
}