import { useEffect, useState } from "react"
import Dias from "./Dias"
import axios from 'axios'
import { useParams } from "react-router-dom"

export default function Sessao() {
    const [filme, setFilme] = useState({days: ['1','2']})
    const { idFilme } = useParams()
    useEffect(() => {
        const resposta = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)
        resposta.catch(() => {
            return(console.log('Deu ruim'))
        })
        resposta.then(resposta => {
            setFilme(resposta.data)
        })
    },[])
    let condition = false
    if(filme !== {days: ['1','2']}) {
        condition = true
    }
    
    return(
        <div class="selecaoSessao">
            <div class="selecione">
                Selecione o horário
            </div>
            {condition ? filme.days.map(dia => <Dias dia={dia} key={dia.id} />) : 'Carregando...'}
            <footer>
                <div class="thumbnail">
                    <img src={filme.posterURL} />
                </div>
                <div class="info">
                    <p>
                        {filme.title}
                    </p>
                </div>
            </footer>
        </div>
    )
}