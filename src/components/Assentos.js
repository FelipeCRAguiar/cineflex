import Assento from "./Assento"

export default function Assentos() {
    return(
        <div class="selecaoAssento">
            <div class="selecione">
                Selecione o(s) assento(s)
            </div>
            <div class="assentos">
                <Assento />
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
            <button>Reservar assento(s)</button>
            <footer>
                <div class="thumbnail"></div>
                <div class="info">
                    <p>
                        Enola Holmes
                    </p>
                    <p>
                        Quinta-feira - 15:00
                    </p>
                </div>
            </footer>
        </div>
    )
}