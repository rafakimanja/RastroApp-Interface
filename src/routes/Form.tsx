import { useState } from "react"
import './Form.css'

export default function Form(){
    const [type, setType] = useState('entrada')

    return (
        <div className="form-card">
            <h1 className="form-title">Meu Formulário</h1>

            <div className="form-group">
                <label htmlFor="valor">Valor</label>
                <input type="number" id="valor" placeholder="Ex: 1500.00" />
            </div>

            <div className="form-group">
                <label htmlFor="data">Data</label>
                <input type="date" id="data" />
            </div>

            <div className="form-group">
                <label htmlFor="tipo">Tipo</label>
                <select id="tipo" value={type} onChange={(e) => setType(e.target.value)}>
                <option value="entrada">Entrada</option>
                <option value="saida">Saída</option>
                </select>
            </div>

            <div className="form-group">
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria" disabled={type === 'entrada'}>
                <option value="">Selecione</option>
                <option value="contas">Contas</option>
                <option value="alimentacao">Alimentação</option>
                <option value="transporte">Transporte</option>
                <option value="outros">Outros</option>
                </select>
            </div>

            <div className="btn-group">
                <button className="btn-form" id="cancel">Cancelar</button>
                <button className="btn-form" id="submit">Salvar</button>
            </div>
        </div>
  );

}