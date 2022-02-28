import Link from 'next/link'
import { useRouter } from 'next/router'

import { Container, Item, List, Underline } from './styles'

export function Header() {
  const router = useRouter()

  const tabs = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Posts',
      path: '/posts',
    },
  ]

  return (
    <Container>
      <List>
        {tabs.map((item, itemId) => (
          <Link key={itemId} href={item.path} passHref>
            <Item
              className={`${item.path === router.pathname ? 'selected' : ''}`}
            >
              {item.name}
              {item.path === router.pathname ? (
                <Underline layoutId="underline" />
              ) : null}
            </Item>
          </Link>
        ))}
      </List>
    </Container>
  )
}
