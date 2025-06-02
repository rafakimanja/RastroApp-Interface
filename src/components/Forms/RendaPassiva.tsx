import { Link } from "react-router";
import './StyleForm.css'
import CategoriaInput from "./CategoriaInput";

export default function FormRendaPassiva() {

    const categoriasRendaPassiva = [
        { value: '', label: 'Selecione uma categoria' },
        { value: 'rendimentos-aplicacao', label: 'Rendimentos de aplicação' },
        { value: 'resgate-saque', label: 'Resgate / Saque' },
        { value: 'royalties', label: 'Royaltes' },
        { value: 'saldo-anterior', label: 'Saldo em conta (Ano Anterior)' },
        { value: 'dividendos', label: 'Dividendos' },
    ];

    return (
        <div className="form-card">
            <h2 className="form-title">Registro de Renda Passiva</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <CategoriaInput categorias={categoriasRendaPassiva} />

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