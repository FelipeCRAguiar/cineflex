import { Link } from 'react-router-dom'

export default function Sessoes(props) {
    return(
        <Link to={`/assentos/${props.sessao.id}`}>
            <div class="sessao">{props.sessao.name}</div>
        </Link>
    )
}