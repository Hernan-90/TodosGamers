import { Card } from './Card'

interface Breweries {
  id: string;
  name: string;
  address_1: string;
  phone: string
}

interface Props {
  breweriesList: Array<Breweries>;
}

export const Breweries = ({ breweriesList }: Props) => {

  return (
    <div className="main__carrousel">
      {
        breweriesList.map( brewery => (
          <Card key={ brewery.id } { ...brewery}/>
        ) )
      }
    </div>
  )
}
