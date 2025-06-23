import { useState } from 'react'
import ConteudoConfig from '../../components/Configuracoes/Conteudo'
import './Configuracoes.css'

export default function Configuracoes(){

    const [conteudo, setConteudo] = useState('')

    return(
        <div className="bg-config">
            <nav className="internal-menu">
                <button className="menu-button" onClick={() => setConteudo('config')}>⚙️</button>
                <button className="menu-button" onClick={() => setConteudo('form')}>💬</button>
            </nav>
            <ConteudoConfig conteudo={conteudo}/>
        </div>
    )
}