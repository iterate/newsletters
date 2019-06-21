import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Newsletter = ({ name, description, image, id }) => (
  <Wrapper>
    <Image src={image} alt="" />
    <Name>{name}</Name>
    <Description>{description}</Description>
    <Link to={`/newsletters/${id}`}>Sign up</Link>
  </Wrapper>
)

const Wrapper = styled.div`
  background: #ffffff;
  border-radius: 5px;
`

const Image = styled.img`
  width: 100%;
`

const Name = styled.h3`
  font-weight: 700;
  font-size: 18px;
`

const Description = styled.p`
  font-size: 18px;
  color: #7d7d7d;
`

export default Newsletter
