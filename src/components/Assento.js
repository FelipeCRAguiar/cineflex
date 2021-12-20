import { useEffect, useState } from "react"


export default function Assento(props) {
    const [status, setStatus] = useState('')
    useEffect(() => {
        if (props.assento.isAvailable === true) {
            setStatus('disponivel')
        }
        else if (props.assento.isAvailable === false) {
            setStatus('indisponivel')
        }
    },[])
    function selecionar() {
        if (status === 'indisponivel') {
            return alert("Esse assento não está disponível")
        }
        else if(status === 'disponivel') {
            setStatus('selecionado')
            props.selecionados([...props.lista, props.assento.id])
            props.salvar([...props.assentos, props.assento.name])
        }
        else if(status === 'selecionado') {
            setStatus('disponivel')
            for(let i = 0; i<props.lista.length;i++) {
                if(props.lista[i] === props.assento.id) {
                    props.lista.splice(i, 1)
                }
            }
            props.selecionados(props.lista)
            for(let i = 0; i<props.assentos.length;i++) {
                if(props.assentos[i] === props.assento.name) {
                    props.lista.splice(i, 1)
                }
            }
            props.salvar(props.assentos)
        }
    }
    
    return(
        <div class={`assento ${status}`} onClick={selecionar}>{props.assento.name}</div>
    )
}