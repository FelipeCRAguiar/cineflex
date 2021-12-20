import Assento from "./Assento"
import { Link, useParams } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"

export default function Assentos() {
    const [assentos, setAssentos] = useState({})
    const [listaSelecionados, setSelecionados] = useState([])
    const { idSessao } = useParams()
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
    condition ? dia = assentos.day.weekday + ' - ' + assentos.day.date: dia = ''
    
    return(
        <div class="selecaoAssento">
            <div class="selecione">
                Selecione o(s) assento(s)
            </div>
            <div class="assentos">
                {condition ? assentos.seats.map(assento => <Assento assento={assento} selecionados={setSelecionados} lista={listaSelecionados} key={assento.id} />): "Carregando..."}
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
                <input placeholder="Digite seu nome..." />
            </div>
            <div class="informacao">
                <p>CPF do comprador:</p>
                <input placeholder="Digite seu CPF..." />
            </div>
            <Link to='/sucesso'>
                <button>Reservar assento(s)</button>
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