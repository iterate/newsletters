import React from 'react'
import styled from 'styled-components'
import Newsletter from './Newsletter'

const Category = ({ name, newsletters }) => (
  <>
    <Name>{name}</Name>
    <NewsletterList>
      {newsletters.map(newsletter => (
        <li key={newsletter.id}>
          <Newsletter {...newsletter} />
        </li>
      ))}
    </NewsletterList>
  </>
)

const NewsletterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > :not(:last-child) {
    margin-bottom: 20px;
  }
`

const Name = styled.h2`
  font-weight: 500;
  font-size: 28px;
  color: #303242;
`

export default Category
