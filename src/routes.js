import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormularioCadastroColaborador from './components/FormularioCadastroColaborador';
import DataGridColaborador from './components/DataGridColaborador';
import token from './data/token.json';

export default function AprecieRouter() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<DataGridColaborador />} />
        <Route path="/cadastro" element={<FormularioCadastroColaborador token={token}/>} />
      </Routes>
    </Router>
  );
}