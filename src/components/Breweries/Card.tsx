import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Location from "../../assets/icons/Location.svg";
import Phone from "../../assets/icons/Phone.svg";
import Brewery from "../../assets/images/Brewery.jpg";
import { Data } from './Data';

interface Props {
  id: string;
  name: string;
  address_1: string;
  phone: string;
}

export const Card = ({ id, name, address_1, phone }: Props) => {

  return (
    <div className='card__container'>
      <h3 className='card__title'>{ name }</h3>
      <div className='card__content'>
        <Image src={ Brewery } alt='Foto Cerveceria' className='card__photo'/>

        <Data address={ address_1 } phone={ phone }/>
      </div>
      <Link href={`brewery/${ id }`} className='btn'>Ver más</Link>
    </div>
  )
}
