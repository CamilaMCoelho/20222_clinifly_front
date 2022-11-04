import { HomeContainer } from '../styles/pages/home'

import { Intro } from '../components/pages/Home/Intro'
import { OurCoffees } from '../components/pages/Home/OurCoffees'

export function Home() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}
