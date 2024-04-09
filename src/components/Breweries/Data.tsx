import Image from "next/image"
import Location from "../../assets/icons/Location.svg";
import Phone from "../../assets/icons/Phone.svg";

interface Props {
  address?: string;
  phone?: string;
}

export const Data = ({ address, phone }: Props) => {
  return (
    <div>
        <div className='card__content-item'>
          <Image src={ Location } alt='Ubicacion' className='card__content-icon'/>
          <p>{ address ? address : 'No tiene' }</p>
        </div>
        <div className='card__content-item'>
          <Image src={ Phone } alt='Telefono' className='card__content-icon phone'/>
          <p>{ phone ? phone : 'No tiene' }</p>
        </div>
      </div>
  )
}
