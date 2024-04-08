'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const delay = async () => {
  setTimeout(() =>{}, 500)
}

export const Arrow = () => {

  const [arrow, setArrow] = useState(false)

  useEffect(() => {
    delay()
    setArrow(true)
  }, [])

  return (
    <Link href={'/breweries'} className='menu__container'>
      <span className={`menu__icon ${ arrow && 'back' }`}></span>
    </Link>
  )
}
