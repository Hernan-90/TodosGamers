'use client'

import Link from "next/link"
import { useState } from "react"

export const Burger = () => {

  const [ open, setOpen ] = useState(false)

  return (
    <>
      <button className="menu__container" onClick={ () => setOpen(!open)}>
        <span className={`menu__icon ${ open ? 'open' : '' }`}></span>
        <div className='menu__background'></div>
        <nav className="menu__nav">
          <ul className="menu__list">
            <li className="menu__item">
              <Link href="#" className="btn menu__link">Nosotros</Link>
            </li>
            <li className="menu__item">
              <Link href="#" className="btn menu__link">Beneficios</Link>
            </li>
            <li className="menu__item">
              <Link href="#" className="btn menu__link">Configuraciones</Link>
            </li>
            <li className="menu__item">
              <Link href="#" className="btn menu__link">Ayuda</Link>
            </li>
          </ul>
        </nav>
      </button>
    </>
  )
}
