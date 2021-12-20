import Assento from "./Assento"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

export default function Assentos() {
    const [assentos, setAssentos] = useState({})
    const [listaSelecionados, setSelecionados] = useState([])
    const [listaAssentos, setListaAssentos] = useState([])
    const { idSessao } = useParams()
    const [nome, setNome] = useState('')
    const [cpf, setCPF] = useState('')
    useEffect(() => {
        const resposta = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)
        resposta.then(resposta => {
            setAssentos(resposta.data)
        })
    },[])
    let condition = false
    if (assentos.seats !== undefined) {
        condition = true
    }
    let dia = ''
    let horario = ''
    let titulo = ''
    condition ? titulo = assentos.movie.title: titulo = ''
    condition ? dia = assentos.day.weekday + ' - ' + assentos.name: dia = ''
    condition ? horario = assentos.day.date + ' ' + assentos.name: horario = ''
    let reserva = {ids: listaSelecionados, name: nome, cpf: cpf, dia: horario, filme: titulo, assentos: listaAssentos}
    function postar() {
        const post = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', reserva)
        post.catch(() => {return(alert('Não foi possivel completar seu pedido'))})
    }
    
    return(
        <div class="selecaoAssento">
            <div class="selecione">
                Selecione o(s) assento(s)
            </div>
            <div class="assentos">
                {condition ? assentos.seats.map(assento => <Assento assento={assento} selecionados={setSelecionados} lista={listaSelecionados} assentos={listaAssentos} salvar={setListaAssentos} key={assento.id} />): "Carregando..."}
            </div>
            <div class="indice">
                <div class="status">
                    <div class="assento selecionado"></div>
                    <p>Selecionado</p>
                </div>
                <div class="status">
                    <div class="assento disponivel"></div>
                    <p>Disponível</p>
                </div>
                <div class="status">
                    <div class="assento indisponivel"></div>
                    <p>Indisponível</p>
                </div>
            </div>
            <div class="informacao">
                <p>Nome do comprador:</p>
                <input placeholder="Digite seu nome..." value={nome} onChange={e => setNome(e.target.value)} />
            </div>
            <div class="informacao">
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." value={cpf} onChange={e => setCPF(e.target.value)} />
            </div>
            <Link to='/sucesso' state={reserva}>
                <button onClick={postar}>Reservar assento(s)</button>
            </Link>
            <footer>
                <div class="thumbnail">
                    {condition ? <img src={assentos.movie.posterURL} />: 'Carregando...'}
                </div>
                <div class="info">
                    <p>
                        {condition ? assentos.movie.title: 'Carregando'}
                    </p>
                    <p>
                        {dia}
                    </p>
                </div>
            </footer>
        </div>
    )
}