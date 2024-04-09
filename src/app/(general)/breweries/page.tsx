import { breweriesApi } from "@/api/breweriesApi";
import { Breweries } from "@/components/Breweries/Breweries";
import { Spinner } from "@/components/shared/Spinner";
import { Suspense } from "react";

const getBreweries = async() => {
  const data = await breweriesApi.get('').then( res => res.data )
  return data
}

const getBreweriesFiltered = async( location: string ) => {
  const data = await breweriesApi.get(`?by_state=${ location }`).then( res => res.data )
  return data
}

export default async function BreweriesPage() {
  
  const breweriesList = await getBreweries()
  const breweriesListByLocation = await getBreweriesFiltered( 'california' )

  return (
    <>
      <h1 className="main__title">Todas las opciones</h1>
      <Suspense fallback={<Spinner/>}>
        <Breweries breweriesList={ breweriesList }/>
      </Suspense>

      <h1 className="main__title">Opciones en { 'california' }</h1>
      <Suspense fallback={<Spinner/>}>
        <Breweries breweriesList={ breweriesListByLocation }/>
      </Suspense>
    </>
  );
}