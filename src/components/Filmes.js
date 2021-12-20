import Filme from "./Filme"
import axios from 'axios'
import { useEffect, useState } from "react"

export default function Filmes() {
    const [filmes, setFilmes] = useState([])
    useEffect(() => {
        const resposta = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies')
        resposta.then(resposta => {
            setFilmes(resposta.data)
        })
    }, [])
    
    return(
        <div class="selecaoFilme">
            <div class="selecione">
                Selecione o filme
            </div>
            <div class="filmes">
                {filmes.map(objeto => <Filme objeto={objeto} key={objeto.id}/>)}
            </div>
        </div>
    )
}