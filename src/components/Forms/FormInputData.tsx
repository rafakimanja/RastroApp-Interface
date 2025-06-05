import { Link } from "react-router"
import CategoriaInput from "./CategoriaInput"
import './StyleForm.css'

type FormInputDataProps = {
    titulo: string,
    categoria: string,
    cor: string
}


export default function FormInputData({ titulo, categoria, cor }: FormInputDataProps) {

    const categorias = {
        renda_ativa: [
            { value: '', label: 'Selecione uma categoria' },
            { value: 'salario', label: 'Salário (líquido)' },
            { value: 'salario-conjuge', label: 'Salário Cônjuge(líquido)' },
            { value: 'adiantamento', label: 'Adiantamento' },
            { value: 'pro-labore', label: 'Pró-labore' },
        ],
        renda_passiva: [
            { value: '', label: 'Selecione uma categoria' },
            { value: 'rendimentos-aplicacao', label: 'Rendimentos de aplicação' },
            { value: 'resgate-saque', label: 'Resgate / Saque' },
            { value: 'royalties', label: 'Royaltes' },
            { value: 'saldo-anterior', label: 'Saldo em conta (Ano Anterior)' },
            { value: 'dividendos', label: 'Dividendos' },
        ],
        investimentos: [
            { value: '', label: 'Selecione uma categoria' },
            { value: 'fundo-emergencia', label: 'Fundo de Emergência' },
            { value: 'fundo-imobiliario', label: 'Fundo Imobiliário' },
            { value: 'renda-fixa', label: 'Renda Fixa' },
            { value: 'renda-variavel', label: 'Renda Variável' },
            { value: 'fundo-investimento', label: 'Fundo de Investimentos' },
        ],
        despesas_fixas: [
            { value: '', label: 'Selecione uma categoria' },
            { value: 'aluguel-prestacao', label: 'Aluguel/Prestação' },
            { value: 'condominio', label: 'Condomínio' },
            { value: 'iptu-taxas-municipais', label: 'IPTU + Taxas Municipais' },
            { value: 'seguro-residencial', label: 'Seguro Residencial' },
            { value: 'agua', label: 'Água' },
            { value: 'luz', label: 'Luz' },
            { value: 'gas', label: 'Gás' },
            { value: 'telefone-fixo', label: 'Telefone Fixo' },
            { value: 'celular', label: 'Celular' },
            { value: 'internet', label: 'Internet' },
            { value: 'tv-a-cabo', label: 'TV à cabo' },
            { value: 'empregado-a', label: 'Empregado(a)' },
        ],
        despesas_variaveis: [
            { value: '', label: 'Selecione uma categoria' },
            { value: 'midias-sociais', label: 'Mídias Sociais' },
            { value: 'manutencao-e-reparos-domesticos', label: 'Manutenção e reparos domésticos' },
            { value: 'auxilio-a-familia', label: 'Auxílio à família' },
            { value: 'detetizacao-esgoto', label: 'Detetização / Esgoto' },
            { value: 'fundo-de-reserva-para-lazer', label: 'Fundo de Reserva para Lazer' },
            { value: 'correio-motoboy', label: 'Correio / Motoboy' },
            { value: 'cigarro-cerveja', label: 'Cigarro / Cerveja' },
            { value: 'utilidades-domesticas-e-decoracao', label: 'Utilidades Domésticas e Decoração' },
            { value: 'contribuicao-sindical', label: 'Contribuição Sindical' },
            { value: 'anuidade-de-classe', label: 'Anuidade de Classe' },
            { value: 'imposto-de-renda', label: 'Imposto de renda' },
        ]
    }

    return (
        <div className="form-card">
            <h2 className="form-title">Formulário de {titulo}</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id={cor} placeholder="Ex: 1500.00" />
                </div>
                <CategoriaInput categorias={categorias[categoria as keyof typeof categorias]} />
                <div className="input-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" name="" id={cor} placeholder="Ex: Investi em..." />
                </div>
            </div>

            <div className="btn-group">
                <div className="input-data">
                    <label htmlFor="data">Data:</label>
                    <input type="date" id={cor} />
                </div>
                <div className="btn-action">
                    <Link to='/' className="btn-form" id="cancel">Cancelar</Link>
                    <button className="btn-form" id="submit">Salvar</button>
                </div>
            </div>
        </div>
    )
}