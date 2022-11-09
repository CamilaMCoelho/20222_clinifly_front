import { TitleText } from '../../../../components/Typography'
// import { CoffeeCard } from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

// import { coffees } from '../../../../data/coffees'

export function OurCoffees() {
  return (
    <OurCoffeesContainer className="alignCenterContainer">
      <TitleText size="l" color="subtitle">
        Suas consultas
      </TitleText>
      <CoffeeList>
        {/* {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))} */}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}
