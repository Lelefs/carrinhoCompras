import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.css';

export default function Cart() {

    let array = localStorage.getItem('arrayProdutos');
    array = JSON.parse(array);
    const qtdTotalItens = localStorage.getItem('qtdTotal');
    let [totalValor, setTotalValor] = useState(0);

    useEffect(() => {
        function carregarValor() {
            array.forEach(function(p) {
                if (p.qtd > 0)
                    totalValor += p.price * p.qtd
            })
            setTotalValor(totalValor)
        }

        carregarValor();
    }, []);

    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Produto</TableCell>
                        <TableCell>Quantidade</TableCell>
                        <TableCell>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {array.map(p => (
                        p.qtd > 0 ? <TableRow>
                            <TableCell>{p.title}</TableCell>
                            <TableCell>{p.qtd}</TableCell>
                            <TableCell>{p.valor}</TableCell>
                        </TableRow> : null
                    ))}
                    <TableRow>
                        <TableCell>Total</TableCell>
                        <TableCell>{qtdTotalItens}</TableCell>
                        <TableCell>R$ {(totalValor).toLocaleString('pt-BR')}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    )
}