import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import token from './data/token.json';
import CadastroColababoradores from './pages/CadastroColaboradores';
import ListagemColaboradoresCadastrados from './pages/ListagemColaboradoresCadastrados';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function AprecieRouter() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path="/" element={<ListagemColaboradoresCadastrados />} />
        <Route path="/cadastro" element={<CadastroColababoradores token={token} />} />
        <Route path="/cadastro/:id" element={<CadastroColababoradores token={token} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}