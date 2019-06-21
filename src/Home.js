import React, { useState } from 'react'
import styled from 'styled-components'
import Category from './Category'

const categories = [
  {
    name: 'Travel',
    newsletters: [
      {
        id: '1',
        name: 'Newsletter 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua rede silpe.',
        image: '/etienne-girardet-360034-unsplash.jpg',
      },
      {
        id: '2',
        name: 'Newsletter 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua rede silpe.',
        image: '/herson-rodriguez-96106-unsplash.jpg',
      },
    ],
  },
  {
    name: 'Sport',
    newsletters: [
      {
        id: '3',
        name: 'Newsletter 3',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua rede silpe.',
        image: '/dan-gold-378201-unsplash.jpg',
      },
    ],
  },
]

const Home = () => {
  const [count, setCount] = useState(0)

  return (
    <Wrapper>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <CategoryList>
        {categories.map(category => (
          <li key={category.id}>
            <Category {...category} />
          </li>
        ))}
      </CategoryList>
    </Wrapper>
  )
}

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`

const Wrapper = styled.div`
  background: #f3efe7;
  padding: 20px;
`

export default Home
