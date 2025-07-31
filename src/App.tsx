import Card from './components/Cards/Card'
import Inforcard from './components/Infocards/InforCard'
import GraficoPizza from './components/Graficos/PieChart'
import GraficoBarra from './components/Graficos/BarChart'
import './App.css'
import GraficoSparkline from './components/Graficos/LineChart'

function App() {
  return (
      <div className="dashboard">
        <div className="row" style={{gap: '7rem'}}>
          <Card id='infocards'>
            <Inforcard valor={2000} categoria='ganhos' titulo='Ganhos' />
          </Card>
          <Card id='infocards'>
            <Inforcard valor={1500} categoria='despesas' titulo='Despesas' />
          </Card>
          <Card id='infocards'>
            <Inforcard valor={500} categoria='saldo' titulo='Saldo' />
          </Card>
        </div>
        <div className="row">
          <Card id='graficos'>
            <h2>Maiores Gastos</h2>
            <div className="graph-content">
              <GraficoBarra />
            </div>
          </Card>
          <Card id='graficos'>
            <h2>Gastos por Categoria</h2>
            <div className="graph-content">
              <GraficoPizza />
            </div>
          </Card>
        </div>
        <div className="row">
          <Card id='informacoes'>
            <div className="mini-graficos">
              <div className="content-grapharea">
                <GraficoSparkline metodo='credito'  />
                <p>Cartão de Crédito: <b>R$ 10K</b> </p>
              </div>
              <div className="content-grapharea">
                <GraficoSparkline metodo='debito' />
                <p>Cartão de Débito: <b>R$ 5K</b> </p>
              </div>
              <div className="content-grapharea">
                <GraficoSparkline metodo='dinheiro' />
                <p>Pix / Dinheiro: <b>R$ 20K</b> </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
  )
}

export default App
