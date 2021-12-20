import { Link } from 'react-router-dom'

export default function Sucesso() {
    return(
        <div class="sucesso">
            <div class="selecione verde">
                Pedido feito com sucesso!
            </div>
            <div class="infoFinal">
                <p class="assunto">Filme e sessão</p>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div class="infoFinal">
                <p class="assunto">Ingressos</p>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div class="infoFinal">
                <p class="assunto">Comprador</p>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <Link to='/'>
                <button>Voltar pra Home</button>
            </Link>
        </div>
    )
}