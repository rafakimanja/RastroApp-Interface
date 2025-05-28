import payments from '../../assets/icons/payments.svg'
import attach_money from '../../assets/icons/attach_money.svg'
import account_balance from '../../assets/icons/account_balance.svg'
import './InforCard.css'

type InfocardProps = {
    titulo: string,
    valor: number,
    categoria: string,
}

export default function Inforcard({titulo, valor, categoria}: InfocardProps){

    const getIcon = (categoria: string) => {
        switch (categoria.toLowerCase()){
            case 'ganhos':
                return attach_money
            case 'despesas':
                return payments
            case 'saldo':
                return account_balance
        }
    }

    return(
        <div className={`bg-infocard`} id={categoria}>
            <p className="titulo-card">{titulo}</p>
            <div className="content-infocard">
                <img src={getIcon(categoria)} alt="icon"/>
                <p>R$ {valor}</p>
            </div>
        </div>
    )
}