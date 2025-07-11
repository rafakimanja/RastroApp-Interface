import { Link } from "react-router"
import CategoriaInput from "./CategoriaInput"
import Button from '@mui/material/Button'
import FileDropzone from "../Dropzone/FileDropzone"
import './StyleForm.css'

type FormInputDataProps = {
    titulo: string,
    categoria: string,
    cor: string
}


export default function FormInputData({ titulo, categoria, cor }: FormInputDataProps) {

    const getFilezone = (categoria: string) => {
        if(categoria.includes('renda')){
            return ''
        } else {
            return (
                <div className="input-group">
                    <FileDropzone onFileSelect={(file) => console.log("Arquivo selecionado:", file)} />
                </div>
            )
        }
    }

    return (
        <div className="form-card">
            <h2 className="form-title">Formulário de {titulo}</h2>
            <div className="form-group">
                <div className="input-group">
                    <label htmlFor="valor">Valor:</label>
                    <input type="number" id={cor} placeholder="Ex: 1500.00" />
                </div>
                <CategoriaInput categoria={categoria} />
                <div className="input-group">
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea className="descricao" id={cor} placeholder="Adicione uma descrição..."></textarea>
                </div>
                {
                    getFilezone(categoria)
                }
            </div>
            <div className="btn-group">
                <div className="input-data">
                    <label htmlFor="data">Data:</label>
                    <input type="date" id={cor} />
                </div>
                <div>
                    <Link to='/'>
                        <Button variant="contained" color="error">Voltar</Button>
                    </Link>
                    <Button variant="contained" color="success" style={{ marginLeft: '20px'}}>Salvar</Button>
                </div>
            </div>
        </div>
    )
}