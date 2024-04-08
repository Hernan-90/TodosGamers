import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Location from "../assets/icons/Location.svg";
import Phone from "../assets/icons/Phone.svg";
import Brewery from "../assets/images/Brewery.jpg";

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
        <div className='card__content-items'>
          <div className='card__content-item'>
            <Image src={ Location } alt='Ubicacion' className='card__content-icon'/>
            <p>{ address_1 }</p>
          </div>
          <div className='card__content-item'>
            <Image src={ Phone } alt='Telefono' className='card__content-icon'/>
            <p>{ phone }</p>
          </div>
        </div>
      </div>
      <Link href={`brewery/${ id }`} className='btn'>Ver más</Link>
    </div>
  )
}
