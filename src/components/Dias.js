import Sessoes from "./Sessoes"

export default function Dias(props) {
    let dia = props.dia.weekday + " - " + props.dia.date
    let condition = false
    if (props.dia.showtimes !== undefined) {
        condition = true
    }
    return(
        <div class="dias">
            <div class="dia">
                {dia}
            </div>
            <div class="sessoes">
                {condition ? props.dia.showtimes.map(sessao => <Sessoes sessao={sessao} key={sessao.id} />): 'Carregando...'}
            </div>
        </div>
    )
}