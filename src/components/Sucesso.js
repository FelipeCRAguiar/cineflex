import { Link, useLocation } from 'react-router-dom'

export default function Sucesso() {
    const reserva = useLocation()
    console.log(reserva.state)
    return(
        <div class="sucesso">
            <div class="selecione verde">
                Pedido feito com sucesso!
            </div>
            <div class="infoFinal">
                <p class="assunto">Filme e sessão</p>
                <p>{reserva.state.filme}</p>
                <p>{reserva.state.dia}</p>
            </div>
            <div class="infoFinal">
                <p class="assunto">Ingressos</p>
                {reserva.state.assentos.map(numero => <p>Assento {numero}</p>)}
            </div>
            <div class="infoFinal">
                <p class="assunto">Comprador</p>
                <p>Nome: {reserva.state.name}</p>
                <p>CPF: {reserva.state.cpf}</p>
            </div>
            <Link to='/'>
                <button>Voltar pra Home</button>
            </Link>
        </div>
    )
}