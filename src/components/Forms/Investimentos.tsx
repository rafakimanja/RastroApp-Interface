import { Link } from "react-router";
import './StyleForm.css'
import CategoriaInput from "./CategoriaInput";

export default function FormInvestimentos() {

    const categoriasInvestimentos = [
        { value: '', label: 'Selecione uma categoria' },
        { value: 'fundo-emergencia', label: 'Fundo de Emergência' },
        { value: 'fundo-imobiliario', label: 'Fundo Imobiliário' },
        { value: 'renda-fixa', label: 'Renda Fixa' },
        { value: 'renda-variavel', label: 'Renda Variável' },
        { value: 'fundo-investimento', label: 'Fundo de Investimentos' },
    ];

    return (
        <div className="form-card">
            <h2 className="form-title">Registro Investimentos</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <CategoriaInput categorias={categoriasInvestimentos} />

                <div className="input-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <input type="text" name="" id="" placeholder="Ex: Investi em..." />
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