import type { Transacao } from "../../types/Transacao"
import './Registro.css'
import { useNavigate } from "react-router";

function refatoraDatasRegistros(transacoes: Transacao[]) {

    const datas: { dia: string; mes: string; ano: string; }[] = []

    transacoes.forEach(transacao => {
        const data = transacao.data.split("-")
        const dia = data[2]
        const mes = data[1]
        const ano = data[0]

        datas.push({dia, mes, ano})
    })

    return datas
}



export default function Registro(){

    const transacoes: Transacao[] = [
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
        },
        {
            id: '3',
            titulo: 'Freelance',
            descricao: 'Projeto de site entregue para cliente',
            data: '2025-04-18',
            valor: 2200,
            operacao: 'entrada',
            categoria: 'Renda Extra'
        },
        {
            id: '4',
            titulo: 'Academia',
            descricao: 'Mensalidade da academia',
            data: '2025-07-05',
            valor: 120,
            operacao: 'saida',
            categoria: 'Saúde'
        }
    ]

    const datasRefatoradas = refatoraDatasRegistros(transacoes)

    const navigate = useNavigate()

    const showDetails = (ano: string, mes: string) => {
        navigate(`/transacoes/${ano}/${mes}`)
    }

    return(
        <div className="bg-registro">
            <h1>Registros</h1>
            <div className="transacoes">
                {
                    datasRefatoradas.map((data, index) => (
                        <div className="data-transacoes" key={index} onClick={() => showDetails(data.ano, data.mes)}>
                            <h2>{data.mes}/{data.ano}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}