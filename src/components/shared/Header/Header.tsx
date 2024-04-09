import Image from 'next/image'
import React from 'react'
import Bell from '../../../assets/icons/Bell.svg'
import User from '../../../assets/icons/User.svg'
import { Menu } from './Menu'

export const Header = () => {
  return (
    <header className='navbar'>
      <Menu/>

      {/* <Image src={ Burger } alt='Menu' className='navbar__img menu' /> */}
      <nav className='navbar__items'>
        <Image src={ Bell } alt='Notificaciones' className='navbar__img' />
        <Image src={ User } alt='Perfil' className='navbar__img' />
      </nav>
    </header>
  )
}
