import { Link } from "react-router";
import './StyleForm.css'

export default function FormRendaAtiva(){
    return(
        <div className="form-card">
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Salário:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Renda Extra:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Adiantamento:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Pró-labore:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
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