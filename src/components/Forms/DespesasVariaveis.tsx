import { Link } from "react-router";
import './StyleForm.css'

export default function FormDespesasVariaveis(){
    return(
        <div className="form-card">
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Mídias Sociais:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Manutenção e reparos domésticos:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Auxílio à família:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Detetização / Esgoto:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Fundo de Reserva para Lazer:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Correio / Motoboy:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Cigarro / Cerveja:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Utilidades Domésticas e Decoração:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Contribuição Sindical:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>

                <div className="input-group">
                    <label htmlFor="valor">Anuidade de Classe:</label>
                    <input type="number" id="valor" placeholder="Ex: 1500.00" />
                </div>
            </div>

            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Imposto de renda:</label>
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