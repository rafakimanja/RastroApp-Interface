import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="background">
      <div className="row" style={{justifyContent: 'center', gap: '3rem'}}>
        <Card altura={0.6} largura={1.2}>
          <h3>Pagamentos</h3>
        </Card>
        <Card altura={0.6} largura={1.2}>
          <h3>Pagamentos</h3>
        </Card>
        <Card altura={0.6} largura={1.2}>
          <h3>Pagamentos</h3>
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
      <div className="row" style={{justifyContent: 'space-between'}}>
        <Card altura={0.5} largura={3.9}>
          <h3>Informação</h3>
        </Card>
        <Card altura={0.5} largura={2}>
          <p>Próximo</p>
          <p>Mês</p>
        </Card>
        <Card>
          <div></div>
        </Card>
      </div>
    </div>
  )
}

export default App
