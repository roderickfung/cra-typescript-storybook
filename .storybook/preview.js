import React from 'react'
import { addDecorator } from '@storybook/react'
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

addDecorator(fn => (
  <ThemeProvider theme={THEME}>
    <Block>
      {fn()}
    </Block>
  </ThemeProvider>
))