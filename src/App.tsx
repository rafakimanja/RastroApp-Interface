import Card from './components/Cards/Card'
import Inforcard from './components/Infocards/InforCard'
import './App.css'

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
            <h1>Gráfico 2</h1>
          </Card>
          <Card id='graficos'>
            <h1>Gráfico 1</h1>
          </Card>
        </div>
        <div className="row">
          <Card id='informacoes'>
            <p>Informação</p>
          </Card>
          <Card id='informacoes'>
            <p>Próximo mês</p>
          </Card>
        </div>
      </div>
  )
}

export default App
