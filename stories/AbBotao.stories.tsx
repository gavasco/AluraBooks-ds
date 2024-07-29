import React from 'react'
import  AbBotao, {AbBotaoProps } from '../src/componentes/AbBotao/AbBotao'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbBotao',
    component: AbBotao
} as ComponentMeta<typeof AbBotao>

const Template: ComponentStory<typeof AbBotao> = (args) => <AbBotao {...args}/>

export const Primario = Template.bind({})
Primario.args = {
    texto: 'Botão primario',
    tipo: 'primario'
} as AbBotaoProps

export const Secundario = Template.bind({})
Secundario.args = {
    texto: 'Botão secundario',
    tipo: 'secundario'
} as AbBotaoProps