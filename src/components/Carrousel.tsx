import Image from 'next/image'

interface Photo {
  id: number,
  path: string,
  description: string
}

interface Props {
  photos: Array<Photo>
}

export const Carrousel = ({ photos }: Props) => {
  return (
    <div className='carrousel__container'>
      {
        photos.map( photo => 
          <Image key={ photo.id } src={ photo.path } alt={`${ photo.description }`} className='carrousel__photo'/>
        )
      }
    </div>
  )
}
