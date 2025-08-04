import Card from "../../components/Cards/Card"
import GraficoArea from "../../components/Graficos/AreaChart"
import GraficoPizza from "../../components/Graficos/PieChart"
import '../../App.css'

export default function Investimentos(){

    const fakeData = [
        { id: 0, value: 400, label: 'Fundo de Emergência' },
        { id: 1, value: 550, label: 'Renda Fixa'},
        { id: 2, value: 350, label: 'Renda Variavel'},
        { id: 2, value: 100, label: 'Fundo de Investimentos'},
    ]

    return(
        <div className="dashboard">
            <div className="row">
                <Card id="graficos">
                    <h2>Valor em: Reserva de Emergência</h2>
                    <div className="graph-content">
                        <GraficoArea />
                    </div>
                </Card>
                <Card id="graficos">
                    <h2>Areas de Investimento</h2>
                    <div className="graph-content">
                        <GraficoPizza dados={fakeData} />
                    </div>
                </Card>
            </div>
        </div>
    )
}