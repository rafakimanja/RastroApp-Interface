import { useState } from 'react'
import ConteudoConfig from '../../components/Configuracoes/Conteudo'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import './Configuracoes.css'

export default function Configuracoes(){

    const [conteudo, setConteudo] = useState('')

    return(
        <div className="bg-config">
            <nav className="internal-menu">
                <button className="menu-button" onClick={() => setConteudo('variáveis')}> <AutorenewIcon /> </button>
                <button className="menu-button" onClick={() => setConteudo('fixas')}> <DoNotDisturbOnIcon /> </button>
            </nav>
            <ConteudoConfig conteudo={conteudo}/>
        </div>
    )
}