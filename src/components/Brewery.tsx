'use client'

import Image from 'next/image'
import Location from "../assets/icons/Location.svg";
import Phone from "../assets/icons/Phone.svg";
import Link from 'next/link';
import { Carrousel, Reviews } from '@/components/index';
import { useAppDispatch, useAppSelector } from '@/store';


interface Brewery {
  name: string;
  address_1: string;
  phone: string;
}

interface Props {
  brewery: Array<Brewery>
}

export const Brewery = ({ brewery }: Props) => {

  const { photos, userReviews } = useAppSelector( state => state.breweries.breweryData )
  const { name, address_1, phone } = brewery

  return (
    <div className='brewery__container'>
      <h1 className='brewery__title'>{ name }</h1>
      
      <div>
        <div className='card__content-item'>
          <Image src={ Location } alt='Ubicacion' className='card__content-icon'/>
          <p>{ address_1 }</p>
        </div>
        <div className='card__content-item'>
          <Image src={ Phone } alt='Telefono' className='card__content-icon'/>
          <p>{ phone }</p>
        </div>
      </div>

      <Carrousel photos={ photos }/>
      <Reviews reviews={ userReviews }/>

      <div className='btns__container'>
        <Link href={'#'} className='btn btn__detail'>Reservar mesa</Link>
        <Link href={'#'} className='btn btn__detail btn__outline'>Opciones de transporte</Link>
      </div>
    </div>
  )
}
