import categorias from '../../data/categorias_formatado.json'

type PropsConteudoConfig = {
    conteudo: string,
}

function retornaConteudo(tipo: string){
    
    switch(tipo){
        case 'form':
            return(
                <div className="internal-content">
                    <h2>Conteúdo Formulario</h2>
                    <p>Categorias de despesas fixas.</p>
                    {
                        categorias.map((categoria) => {
                            if(categoria.categoria == 'despesas_fixas')
                                return <p>{categoria.label}</p>
                        })
                    }
                </div>
            )
            
        case 'config':
            return(
                <div className="internal-content">
                    <h2>Conteúdo Configurações</h2>
                    <p>Essa área representa o conteúdo de configurações.</p>
                </div>
            )
        
        default:
            return(
                <div className="internal-content">
                    <p>Escolha um tópico</p>
                </div>
            )

    }
}

export default function ConteudoConfig({ conteudo }: PropsConteudoConfig){
    return retornaConteudo(conteudo)
}

