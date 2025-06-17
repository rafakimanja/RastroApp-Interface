import { useState } from 'react';
import FormInputData from '../../components/Forms/FormInputData';
import './Form.css'

export default function Form() {

    const [titulo, setTitulo] = useState('')
    const [form, setForm] = useState('')
    const [cor, setCor] = useState('')

    return (
        <div className="bg-form">
            <nav className="navbar-inline">
                <ul className="navbar-list">
                    <li><button className="nav-item" id='renda' onClick={() => { setTitulo('Renda Ativa'), setForm('renda_ativa'), setCor('verde') }}>Renda Ativa</button></li>
                    <li><button className="nav-item" id='renda' onClick={() => { setTitulo('Renda Passiva'), setForm("renda_passiva"), setCor('verde') }}>Renda Passiva</button></li>
                    <li><button className="nav-item" id='investimento' onClick={() => { setTitulo('Investimentos'), setForm("investimentos"), setCor('amarelo') }}>Investimentos</button></li>
                    <li><button className="nav-item" id='despesa' onClick={() => { setTitulo('Despesas Fixas'), setForm("despesas_fixas"), setCor('vermelho') }}>Despesas Fixas</button></li>
                    <li><button className="nav-item" id='despesa' onClick={() => { setTitulo('Despesas Variáveis'), setForm("despesas_variaveis"), setCor('vermelho') }}>Despesas Variáveis</button></li>
                </ul>
            </nav>

            <div className="form-content">
                {
                    form ? <FormInputData categoria={form} titulo={titulo} cor={cor} /> : <p>Selecione uma categoria de formulário</p>
                }
            </div>
        </div>
    );
}