import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import styled, { ThemeProvider } from 'styled-components'
import THEME from 'styles/theme'

const Block = styled.section`
  display: flex;
  justify-content: flex-start;
  margin: 20px;
  > * { 
    margin-right: 20px;
  }
`

addParameters({
  backgrounds: [
    { name: "light", value: THEME.colors.white, default: true },
    { name: "dark", values: THEME.colors.gray50 },
  ],
})

addDecorator(fn => (
  <ThemeProvider theme={THEME}>
    <Block>
      {fn()}
    </Block>
  </ThemeProvider>
))