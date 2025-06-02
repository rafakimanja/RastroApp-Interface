import { useState } from 'react';
import FormRendaAtiva from '../components/Forms/RendaAtiva';
import FormRendaPassiva from '../components/Forms/RendaPassiva';
import FormInvestimentos from '../components/Forms/Investimentos';
import FormDespesasFixas from '../components/Forms/DespesasFixa';
import './Form.css'

export default function Form(){

    const [form, setForm] = useState('')

    const returnForm = (form: string) => {
        switch (form) {
            case 'renda ativa':
                return <FormRendaAtiva />;
            case 'renda passiva':
                return <FormRendaPassiva />;
            case 'investimentos':
                return <FormInvestimentos />;
            case 'despesas fixas':
                return <FormDespesasFixas />;
            case 'despesas variaveis':
                return <p>Formulário de Despesas Variáveis</p>;
            default:
                return <p>Selecione uma categoria acima.</p>;
        }
    }

    return (
        <div className="bg-form">
            <nav className="navbar-inline">
                <ul className="navbar-list">
                <li><button className="nav-item" id='renda' onClick={() => setForm("renda ativa")}>Renda Ativa</button></li>
                <li><button className="nav-item" id='renda' onClick={() => setForm("renda passiva")}>Renda Passiva</button></li>
                <li><button className="nav-item" id='investimento' onClick={() => setForm("investimentos")}>Investimentos</button></li>
                <li><button className="nav-item" id='despesa' onClick={() => setForm("despesas fixas")}>Despesas Fixas</button></li>
                <li><button className="nav-item" id='despesa' onClick={() => setForm("despesas variaveis")}>Despesas Variáveis</button></li>
                </ul>
            </nav>

            <div className="form-content">
                { returnForm(form) }
            </div>
        </div>
    );
}