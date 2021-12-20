import Nav from './Nav'
import Filmes from './Filmes'
import Assentos from './Assentos'
import Sucesso from './Sucesso'
import Sessao from './Sessao'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path='/' element={<Filmes />} />
                <Route path='/sessoes/:idFilme' element={<Sessao />} />
                <Route path='/assentos/:idSessao' element={<Assentos />} />
                <Route path='/sucesso' element={<Sucesso />} />
            </Routes>
        </BrowserRouter>
    )
}