'use client'

import Image from 'next/image'
import React from 'react'
import Calendar from '../../assets/icons/Calendar.svg'
import Home from '../../assets/icons/Home.svg'
import Chat from '../../assets/icons/Chat.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Footer = () => {

  const homeView = usePathname()

  return (
    <footer className='footer__container'>
      <Link href={''} className="footer__item">
        <Image src={ Calendar } alt='Calendario' className='footer__img'/>
        <p className='footer__item-text'>Calendario</p>
      </Link>
      <Link href={''} className={`footer__item ${ homeView === '/breweries' ? 'active' : '' }`}>
        <Image src={ Home } alt='Inicio' className='footer__img'/>
        <p className='footer__item-text'>Inicio</p>
      </Link>
      <Link href={''} className="footer__item">
        <Image src={ Chat } alt='Chat' className='footer__img'/>
        <p className='footer__item-text'>Chat</p>
      </Link>
    </footer>
  )
}
