import React, { ReactNode } from "react"
import styled from "styled-components"

export interface AbCardProps {
    children: ReactNode
}

const DivCard = styled.div`
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 48px ;
`

export default function AbCard ({ children }: AbCardProps) {
    return (
        <DivCard>
            {children}
        </DivCard>
    )
}