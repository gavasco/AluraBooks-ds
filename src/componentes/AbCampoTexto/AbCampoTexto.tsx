import React from "react"
import styled from "styled-components"

const DivCampoTexto = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: Arial, Helvetica, sans-serif;
    label {
        font-weight: 700;
        font-size: 16px;
        color: rgba(0, 47, 82, 1);
        margin-left: 16px;
    }
    input {
        border: 1px solid rgba(0, 47, 82, 1);
        border-radius: 24px;
        padding: 8px 24px;
        color:  rgba(164, 164, 164, 1);
        line-height: 24px;
        &:focus{
            outline: none;
        }
        width: 100%;
        box-sizing: border-box;
    }
`

export interface AbCampoTextoProps {
    label?: string
    value: string
    onChange: (value: string) => void
    type?: 'text' | 'email' | 'password' | 'date'
}

export default function AbCampoTexto({ type = 'text', label, value, onChange }: AbCampoTextoProps) {
    return (
        <DivCampoTexto>
            <label> {label} </label>
            <input type={type} value={value} onChange={e => onChange(e.target.value)} />
        </DivCampoTexto>
    )
}