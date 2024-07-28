import React from 'react'
import { AbBotao, AbBotaoProps } from '../src/componentes/AbBotao/AbBotao'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (props) => <AbBotao {...props}/>

export const Primario = Template.bind({})
Primario.props = {
    texto: 'Botão primario',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({})
Secundario.props = {
    texto: 'Botão secundario',
    tipo: 'secundario'
} as AbBotaoProps