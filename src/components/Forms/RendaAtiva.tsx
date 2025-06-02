import { Link } from "react-router";
import CategoriaInput from "./CategoriaInput";
import './StyleForm.css'

export default function FormRendaAtiva(){

    const categoriasRendaAtiva = [
        { value: '', label: 'Selecione uma categoria' },
        { value: 'salario', label: 'Salário (líquido)' },
        { value: 'salario-conjuge', label: 'Salário Cônjuge(líquido)' },
        { value: 'adiantamento', label: 'Adiantamento' },
        { value: 'pro-labore', label: 'Pró-labore' },
    ];


    return(
        <div className="form-card">
            <h2 className="form-title">Registro de Renda Ativa</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <CategoriaInput categorias={categoriasRendaAtiva} />

                <div className="input-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" name="" id="" placeholder="Ex: recebi um dinheiro..."/>
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