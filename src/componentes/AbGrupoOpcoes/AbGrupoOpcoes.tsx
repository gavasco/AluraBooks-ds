import React, { useState } from "react";
import styled from "styled-components";

export interface AbGrupoOpcao {
    id: number
    titulo: string
    corpo: string
    rodape: string
}
export interface AbGrupoOpcaoProps {
    opcoes: AbGrupoOpcao[] 
    valorPadrao?: AbGrupoOpcao | null
    onChange?: (opcao: AbGrupoOpcao) => void
}

const Section = styled.section<{ selecionado: boolean }>`
    border: 1px solid ;
    border-color: ${props => props.selecionado ?
        'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#EB9B00'};
    border-radius: 8px;
    background: ${props => props.selecionado ?
        'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFF'};
    color: ${props => props.selecionado ? '#FFF' : '#EB9B00'};
    font-size: 12px;
    text-align: center;
    padding: 8px;
    width: 194px;
    height: 88px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 10px;
    font-family: sans-serif;
    cursor: pointer;
    header{
        font-weight: 400;
    }
    strong{
        font-size: 16px;
        font-weight: 700;
    }
    footer{
        color: ${props => props.selecionado ? '#FFF' : 'rgba(0, 0, 0, 0.54)'};
    }
`

export function AbGrupoOpcoes({ opcoes, valorPadrao, onChange }: AbGrupoOpcaoProps) {
    const [selecionado, setSelecionado] = useState<AbGrupoOpcao | null>(valorPadrao ?? null )
    function aoSelecionar (opcao: AbGrupoOpcao) {
        setSelecionado(opcao)
        if (onChange) {
            onChange(opcao)
        }
    }
    
    return (
        <>
            {opcoes.map(opcao =>
                <Section 
                    onClick={() => aoSelecionar(opcao)} 
                    key={opcao.id} 
                    selecionado={opcao.id === selecionado?.id}
                >
                    <header> {opcao.titulo} </header>
                    <div>
                        <strong> {opcao.corpo} </strong>
                    </div>
                    <footer> {opcao.rodape} </footer>
                </Section>
            )}
        </>
    )
}