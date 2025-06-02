import { Link } from "react-router";
import './StyleForm.css'

export default function FormRendaPassiva(){
    return(
        <div className="form-card">
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Rendimentos de aplicação:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Resgate / Saque:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Royaltes:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Saldo em conta (Ano Anterior):</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Dividendos:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="data">Data:</label>
                    <input type="date" id="data" />
                </div>
            </div>

            <div className="btn-group">
                <Link to='/' className="btn-form" id="cancel">Cancelar</Link>
                <button className="btn-form" id="submit">Salvar</button>
            </div>
        </div>
    )
}