import React from 'react'
import styled from 'styled-components'

const Header = () => (
  <Wrapper>
    <Logo>NEWSLETTERS</Logo>
  </Wrapper>
)

const Logo = styled.h1`
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.15em;
`

const Wrapper = styled.header`
  background: ${props => props.theme.primary};
  padding: 24px 20px;
`

export default Header
