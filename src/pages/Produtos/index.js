import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.css';

export default function Produtos({ history }) {
    let [qtdProduto, setQtdProduto] = useState('');
    const produto_id = localStorage.getItem('produto_id');
    let array = localStorage.getItem('arrayProdutos');
    array = JSON.parse(array);
    let produtoFinal = localStorage.getItem('produto');
    produtoFinal = JSON.parse(produtoFinal);
    let qtdTotal = localStorage.getItem('qtdTotal');
    
    const [produto, setProduto] = useState([qtdProduto]);

    useEffect(() => {
        async function carregarProduto() {
            array.forEach(function(p) {
                if (p.id === produtoFinal.id)
                    produtoFinal.qtd = p.qtd
            })
            setProduto(produtoFinal)
        }

        carregarProduto();
    }, [qtdProduto]);

    function handleRemove(id) {
        array.forEach(function(p) {
            if (p.id === produto.id) {
                if (produto.qtd > 0) {
                    produto.qtd--
                    p.qtd--
                    qtdTotal--
                    setQtdProduto(produto.qtd)
                    localStorage.setItem('qtdTotal', qtdTotal);
                    localStorage.setItem('produto', JSON.stringify(produto));
                    localStorage.setItem('arrayProdutos', JSON.stringify(array));
                }
            }
        })
    };

    function handleAdd(produto) {
        array.forEach(function(p) {
            if (p.id === produto.id) {
                if (produto.qtd < produto.quantity) {
                    produto.qtd++
                    p.qtd++
                    qtdTotal++
                    setQtdProduto(produto.qtd)
                    localStorage.setItem('qtdTotal', qtdTotal);
                    localStorage.setItem('produto', JSON.stringify(produto));
                    localStorage.setItem('arrayProdutos', JSON.stringify(array));
                }
            }
        })
    };

    return (
        <>
            <div className="linhaUm">
                <header style={{backgroundImage: `url(${produto.picture})`}} />
                <div>
                    <h2>{produto.title}</h2>
                    <div className="divBtns">
                        <button className="btnRemover" onClick={() => handleRemove(produto.id)}>-</button>
                        <input type="text" value={produto.qtd} readOnly />
                        <button className="btnAdicionar" onClick={() => handleAdd(produto)}>+</button>
                    </div>
                </div>
            </div>
            <Paper>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell className="colunaEsquerda">
                                Valor
                            </TableCell>
                            <TableCell>
                                {produto.valor}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="colunaEsquerda">
                                Descrição
                            </TableCell>
                            <TableCell>
                                {produto.description}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="colunaEsquerda">
                                Memória
                            </TableCell>
                            <TableCell>
                                {produto.memory}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="colunaEsquerda">
                                Marca
                            </TableCell>
                            <TableCell>
                                {produto.brand}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell className="colunaEsquerda">
                                Chip
                            </TableCell>
                            <TableCell>
                                {produto.chipType}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Paper>
        </>
    )
}