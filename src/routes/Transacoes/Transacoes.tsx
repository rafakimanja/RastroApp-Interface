import { useParams } from "react-router"
import Tabela from "../../components/Tabela/Tabela"
import './Transacoes.css'

export default function Transacoes(){
    const { ano, mes } = useParams()

    return(
        <div className="bg-transacoes">
            <h1>Transações de {mes} - {ano}</h1>
            <div className="container-tabela">
                <Tabela />
            </div>
        </div>
    )
}