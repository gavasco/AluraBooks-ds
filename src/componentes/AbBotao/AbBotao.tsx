import React from 'react'
import styled from 'styled-components'

export interface AbBotaoProps {
    texto?: string
    tipo?: 'primario' | 'secundario'
    onClick?: () => void
}

const Button = styled.button<AbBotaoProps>` //especificar que button pode receber tipo, se não da erro pois tipo nao existe em html
    background-color: ${props => props.tipo === 'primario' ? '#EB9B00' : '#FFF'};
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: ${props => props.tipo === 'primario' ? '#FFF' : '#EB9B00'};
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.tipo === 'primario' ? '#B87900' : '#FFF'};
        border: 2px solid #B87900;
        color: ${props => props.tipo === 'primario' ? '#FFF' : '#B87900'};
    }
`

export function AbBotao ({ texto, tipo = 'primario', onClick }: AbBotaoProps) {
    return (
        <Button
            tipo={tipo}
            onClick={onClick}
        > 
            {texto} 
        </Button>
    )
    
}