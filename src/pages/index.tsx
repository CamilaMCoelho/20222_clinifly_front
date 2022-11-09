import { HomeContainer } from '../styles/pages/home'

import { Intro } from '../components/pages/Home/Intro'
import { OurCoffees } from '../components/pages/Home/OurCoffees'
import { ReactElement } from 'react'
import DefaultLayout from '../components/Layouts/DefaultLayout'

export default function Home() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}
