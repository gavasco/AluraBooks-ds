import React from "react"
import styled from "styled-components"

export interface AbTagProps {
    texto?: string
}

const DivTag = styled.div`
    background-color: #EB9B00;
    padding: 48px;
    font-weight: 700;
    font-size: 20px;
    color: #FFF;
    text-align: center;
    
`

export default function ({texto }: AbTagProps) {
    return (
        <div>
            {texto}
        </div>
    )
}