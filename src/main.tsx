import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css'
import App from './App.tsx'
import Form from './routes/Form.tsx'
import Registro from './routes/Registro.tsx'
import RootLayout from './components/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<App />} />
        <Route path='form' element={<Form />}/>
        <Route path='register' element={<Registro />}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
