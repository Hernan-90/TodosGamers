import { UserComment } from "./UserComment";

interface Review {
  id: number,
  name: string,
  review: string,
  photo: string,
}

interface Props {
  reviews: Array<Review>
}

export const Reviews = ({ reviews }: Props) => {
  return (
    <div className='reviews__container'>
      <h2 className="reviews__title">Opiniones</h2>
      <div className="reviews__content">
        {
          reviews.map( review => 
            <UserComment key={ review.id } { ...review }/>
          )
        }
      </div>
    </div>
  )
}
