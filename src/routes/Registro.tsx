import Tabela from "../components/Tabela/Tabela";
import './Registro.css'

export default function Registro(){
    return(
        <div className="bg-registro">
            <h1>Registros</h1>
            <div className="container-tabela">
                <Tabela />
            </div>
        </div>
    )
}