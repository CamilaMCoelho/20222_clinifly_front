import type { ReactNode } from 'react'
import { Header } from '../../Header'

import { LayoutContainer } from './styles'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}
