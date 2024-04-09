'use client'

import Link from 'next/link';
import { Carrousel, Reviews } from '@/components/index';
import { useAppSelector } from '@/store';
import { Data } from './Data';

interface Brewery {
  name: string;
  address_1: string;
  phone: string;
}

interface Props {
  brewery: Brewery
}

export const Brewery = ({ brewery }: Props) => {

  const { photos, userReviews } = useAppSelector( state => state.breweries.breweryData )
  const { name, address_1, phone } = brewery

  return (
    <div className='brewery__container'>
      <h1 className='brewery__title'>{ name }</h1>

      <Data address={ address_1 } phone={ phone }/>
      <Carrousel photos={ photos }/>
      <Reviews reviews={ userReviews }/>

      <div className='btns__container'>
        <Link href={'#'} className='btn btn__detail'>Reservar mesa</Link>
        <Link href={'#'} className='btn btn__detail btn__outline'>Opciones de transporte</Link>
      </div>
    </div>
  )
}
