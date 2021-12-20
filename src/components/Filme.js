import { Link } from "react-router-dom";

export default function Filme(props) {
    return(
        <Link to={`/sessoes/${props.objeto.id}`}>
            <div class="filme">
                <img src={props.objeto.posterURL}/>
            </div>
        </Link>
    )
}