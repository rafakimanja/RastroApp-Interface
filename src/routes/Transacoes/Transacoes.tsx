import { useParams } from "react-router"

export default function Transacoes(){

    const { ano, mes } = useParams()

    return(
        <>
            <h1>Transacoes de {mes} - {ano}</h1>
        </>
    )
}