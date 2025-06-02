import { Link } from "react-router";
import CategoriaInput from "./CategoriaInput";
import './StyleForm.css'

export default function FormDespesasFixas() {

    const despesasMoradia = [
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
    ];


    return (
        <div className="form-card">
            <h2 className="form-title">Registro de Despesas Fixas</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <CategoriaInput categorias={despesasMoradia} />

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