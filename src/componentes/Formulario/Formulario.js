import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
  
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    
    const aoSalvar = (evento) => { 
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setImagem('')
        setCargo('')
        setTime('')
    }

    
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                obrigatorio={true} 
                label='Nome' 
                placeholder='Digite seu Nome'
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                obrigatorio={true} 
                label='Cargo' 
                placeholder='Digite seu Cargo' 
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                label='Imagem' 
                placeholder='Digite o endereço da imagem' 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label='Time' 
                itens={props.times} 
                valor={time}
                aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            
            </form>
        </section>


    )
}

export default Formulario