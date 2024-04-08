import Image from 'next/image'
import React from 'react'

interface Props {
  name: string;
  photo: string;
  review: string;
}

export const UserComment = ({ name, photo, review }: Props) => {

  return (
    <div className='review__container'>
      <div className='review__user-items'>
        <Image src={ photo } alt={ name } className='review__user-photo'/>
        <p className='review__user-name'>{ name }</p>
        <p className='review__response'>Responder</p>
      </div>
      <p className='review__text'>{ review }</p>
    </div>
  )
}
