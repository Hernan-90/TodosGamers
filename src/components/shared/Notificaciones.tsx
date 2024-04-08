'use client'

import Image from 'next/image'
import React from 'react'
import Alert from "../../assets/icons/AlertIcon.svg";
import { usePathname } from 'next/navigation';

export const Notificaciones = () => {

  const breweriesView = usePathname()

  return (
    <>
      {
        breweriesView === '/breweries' ? 
          <div className='notify__container'>
            <Image src={ Alert } alt='Icono de Alerta'/>
            <div>
              <p className='notify__title'>Happy Hour</p>
              <p className='notify__description'>16:00 - 17:00 hs MEX</p>
            </div>
          </div>
        : <></>
      }
    </>
  )
}
