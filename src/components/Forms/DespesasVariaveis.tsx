import { Link } from "react-router";
import CategoriaInput from "./CategoriaInput";
import './StyleForm.css'

export default function FormDespesasVariaveis() {

    const despesasVariaveis = [
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
    ];


    return (
        <div className="form-card">
            <h2 className="form-title">Registro Despesas Variáveis</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <CategoriaInput categorias={despesasVariaveis} />

                <div className="input-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" name="" id="" placeholder="Ex: recebi um dinheiro..." />
                </div>
            </div>

            <div className="btn-group">
                <div className="input-data">
                    <label htmlFor="data">Data:</label>
                    <input type="date" id="data" />
                </div>
                <div className="btn-action">
                    <Link to='/' className="btn-form" id="cancel">Cancelar</Link>
                    <button className="btn-form" id="submit">Salvar</button>
                </div>
            </div>
        </div>
    )
}