import { useState } from "react";
import Tabela from "../../components/Tabela/Tabela";
import type { Transacao } from "../../types/Transacao"
import './Registro.css'
import { useNavigate } from "react-router";

function refatoraDatasRegistros(transacoes: Transacao[]) {

    let datas: { dia: string; mes: string; ano: string; }[] = []

    transacoes.forEach(transacao => {
        const data = transacao.data.split("-")
        let dia = data[2]
        let mes = data[1]
        let ano = data[0]

        datas.push({dia, mes, ano})
    })

    return datas
}



export default function Registro(){

    const [transacoes, setTransacoes] = useState<Transacao[]>([
        {
            id: '1',
            titulo: 'Salário',
            descricao: 'Pagamento mensal da empresa',
            data: '2025-05-30',
            valor: 5000,
            operacao: 'entrada',
            categoria: 'Renda'
        },
        {
            id: '2',
            titulo: 'Supermercado',
            descricao: 'Compras do mês',
            data: '2025-06-10',
            valor: 850,
            operacao: 'saida',
            categoria: 'Alimentação'
        }
    ])

    const datasRefatoradas = refatoraDatasRegistros(transacoes)

    const navigate = useNavigate()

    const showDetails = (ano: string, mes: string) => {
        navigate(`/transacoes/${ano}/${mes}`)
    }

    return(
        <div className="bg-registro">
            <h1>Registros</h1>
            {
                datasRefatoradas.map((data, index) => (
                    <div className="data-transacoes" key={index} onClick={() => showDetails(data.ano, data.mes)}>
                        <h2>{data.mes}/{data.ano}</h2>
                    </div>
                ))
            }

            <div className="container-tabela">
                <Tabela />
            </div>
        </div>
    )
}