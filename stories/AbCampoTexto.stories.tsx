import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import AbCampoTexto, { AbCampoTextoProps } from '../src/componentes/AbCampoTexto/AbCampoTexto'

export default {
    title: 'Componentes/AbCampoTexto',
    component: AbCampoTexto,
    argTypes: {
        label: {
            control: 'text'
        }
      },
      parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof AbCampoTexto>

const Template: ComponentStory<typeof AbCampoTexto> = (args) => <AbCampoTexto {...args} />

export const Padrao = Template.bind({})
Padrao.args = {
    label: 'Alguma label'
} as AbCampoTextoProps