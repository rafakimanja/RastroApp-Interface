import categorias from '../../data/categorias_formatado.json'
import type { ICategoria } from '../../types/Categoria'

type PropsConteudoConfig = {
    conteudo: string,
}

function retornaConteudo(categoria: string){

    let data: ICategoria[] = []
    let grupos: string[] = []
    let tipo_despesa = ''

    if(categoria === 'fixas')
        tipo_despesa = 'despesas_fixas'
    else
        tipo_despesa = 'despesas_variaveis'

    categorias.forEach(obj => {
        if (obj.categoria === tipo_despesa)
            data.push(obj)
    })

    data.forEach(d => {
        const resp = grupos.find((grupo) => d.grupo === grupo)
        if(resp === undefined && d.grupo)
            grupos.push(d.grupo)
    })

    return {
        categorias: data,
        grupos: grupos
    }
}

export default function ConteudoConfig({ conteudo }: PropsConteudoConfig){

    const data = retornaConteudo(conteudo)

    return(
        <div className="internal-content">
            <h2>Despesas {conteudo}</h2>
            {
                data.grupos.map((grupo) => {
                    return(
                        <div className="text-content">
                            <h3>{ grupo.toLowerCase() }</h3>
                            {
                                data.categorias.map((categoria) => {

                                    if(categoria.grupo === grupo)
                                        return(
                                            <div className="check-group">
                                                <input type="checkbox" name="" id="" />
                                                <label htmlFor="">{categoria.label}</label>
                                            </div>
                                        )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

