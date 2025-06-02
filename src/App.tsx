import Card from './components/Cards/Card'
import Inforcard from './components/Infocards/InforCard'
import './App.css'

function App() {
  return (
    <div className="background">
      <div className="row" style={{justifyContent: 'center', gap: '7rem'}}>
        <Card altura={0.65} largura={1.4}>
          <Inforcard valor={2000} categoria='ganhos' titulo='Ganhos' />
        </Card>
        <Card altura={0.65} largura={1.4}>
          <Inforcard valor={1500} categoria='despesas' titulo='Despesas' />
        </Card>
        <Card altura={0.65} largura={1.4}>
          <Inforcard valor={500} categoria='saldo' titulo='Saldo' />
        </Card>
      </div>
      <div className="row" style={{justifyContent: 'space-evenly'}}>
        <Card altura={2.2} largura={3.8}>
          <h1>Gráfico 2</h1>
        </Card>
        <Card altura={2.2} largura={3.8}>
          <h1>Gráfico 1</h1>
        </Card>
      </div>
      <div className="row" style={{justifyContent: 'space-between', marginLeft: '1.5rem'}}>
        <Card altura={0.5} largura={3.8}>
          <h3>Informação</h3>
        </Card>
        <Card altura={0.5} largura={2}>
          <p>Próximo mês</p>
        </Card>
        <Card>
          <div></div>
        </Card>
      </div>
    </div>
  )
}

export default App
