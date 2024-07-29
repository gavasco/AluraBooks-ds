import React from "react"
import  AbCard  from '../src/componentes/AbCard/AbCard'
import { ComponentMeta } from "@storybook/react"

export default {
    title: 'Componentes/AbCard',
    component: AbCard
} as ComponentMeta<typeof AbCard>

export function CardComponent () {
    return (
        <AbCard>
            Olá eu sou um Card
        </AbCard>
    )
}