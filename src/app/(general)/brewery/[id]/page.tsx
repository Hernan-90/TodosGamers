import { breweriesApi } from "@/api/breweriesApi";
import { Brewery } from "@/components/Brewery";

interface Props {
  params: { id:string }
}

export const metadata = {
  title: 'Detalle de Cervecería',
  description: 'Detalle de Cervecería',
};

const getBrewery = async( id: string ) => {
  const data = breweriesApi.get(`/${ id }`).then( res => res.data )
  return data
}

export default async function BreweryPage({ params }:Props) {

  const brewery = await getBrewery( params.id )  

  return (
    <Brewery brewery={ brewery }/>
  );
}