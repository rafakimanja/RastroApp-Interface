import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Form from './routes/Form/Form.tsx'
import Registro from './routes/Registro/Registro.tsx'
import Transacoes from './routes/Transacoes/Transacoes.tsx'
import RootLayout from './components/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path='form' element={<Form />}/>
        <Route path='register' element={<Registro />}/>
        <Route path='transacoes/:ano/:mes' element={<Transacoes />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
