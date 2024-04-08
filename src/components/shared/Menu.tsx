'use client'

import { usePathname } from "next/navigation"
import { Arrow } from "./Arrow"
import { Burger } from "./Burger"

export const Menu = () => {

  const breweriesView = usePathname()

  return (
    <>
      {
        breweriesView !== '/breweries' ? <Arrow/> : <Burger/>
      }
    </>
  )
}
