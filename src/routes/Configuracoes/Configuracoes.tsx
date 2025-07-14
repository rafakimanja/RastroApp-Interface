import { useState } from 'react'
import ConteudoConfig from '../../components/Configuracoes/Conteudo'
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import './Configuracoes.css'

export default function Configuracoes(){

    const [conteudo, setConteudo] = useState(false)

    return(
        <div className="bg-config">
            <nav className="internal-menu">
                <button className="menu-button" onClick={() => setConteudo(false)}> <AutorenewIcon sx={{ color: 'var(--clr-text)' }} /> </button>
                <button className="menu-button" onClick={() => setConteudo(true)}> <DoNotDisturbOnIcon sx={{ color: 'var(--clr-text)' }} /> </button>
            </nav>
            <ConteudoConfig isFixas={conteudo}/>
        </div>
    )
}