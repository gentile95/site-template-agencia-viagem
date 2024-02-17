import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Info from './routes/Info';
import Servico from './routes/Servico';
import Contato from './routes/Contato';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/info' element={<Info/>}></Route>
      <Route path='/servicos' element={<Servico/>}></Route>
      <Route path='/contato' element={<Contato/>}></Route>
    </Routes>
  );
}

export default App;
