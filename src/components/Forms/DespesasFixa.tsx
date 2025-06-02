import { Link } from "react-router";
import './StyleForm.css'

export default function FormDespesasFixas(){
    return(
        <div className="form-card">
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Aluguel/Prestação:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Condomínio:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">IPTU + Taxas Municipais:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Seguro Residencial:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Água:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Luz:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Gás:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Telefone Fixo:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Celular:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Internet:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">TV à cabo:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Empregado(a):</label>
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