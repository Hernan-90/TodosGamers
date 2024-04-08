import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Brewery from "../../assets/images/Brewery.jpg";
import Carrousel1 from "../../assets/images/Carrousel1.webp";
import Carrousel2 from "../../assets/images/Carrousel2.webp";
import Carrousel3 from "../../assets/images/Carrousel3.webp";
import Carrousel4 from "../../assets/images/Carrousel4.webp";
import Avatar1 from "../../assets/images/Avatar1.webp";
import Avatar2 from "../../assets/images/Avatar2.webp";
import Avatar3 from "../../assets/images/Avatar3.webp";
import Avatar4 from "../../assets/images/Avatar4.webp";
import Avatar5 from "../../assets/images/Avatar5.webp";
import Avatar6 from "../../assets/images/Avatar6.webp";

interface BreweriesState {
  userLocation: string;
  breweriesList: Array<any>;
  breweriesListByLocation: Array<any>;
  breweryData: {
    name: string,
    address: string,
    phone: string,
    avatar: object,
    photos: Array<any>,
    userReviews: Array<any>, 
  };
}

const photos = [
  {
    id: 1,
    path: Brewery,
    description: 'Foto del Lugar'
  },
  {
    id: 2,
    path: Carrousel1,
    description: 'Foto del Lugar'
  },
  {
    id: 3,
    path: Carrousel2,
    description: 'Foto del Lugar'
  },
  {
    id: 4,
    path: Carrousel3,
    description: 'Foto del Lugar'
  },
  {
    id: 5,
    path: Carrousel4,
    description: 'Foto del Lugar'
  },
]

const users = [
  {
    id: 1,
    name: 'Alana',
    review: 'Lorem ipsum dolor sit amet consectetur, adipiscing elit luctus sociosqu accumsan cras, pellentesque iaculis dapibus eleifend.',
    photo: Avatar1,
  },
  {
    id: 2,
    name: 'Mark',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    photo: Avatar2,
  },
  {
    id: 3,
    name: 'Cris',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit platea sem natoque.',
    photo: Avatar3,
  },
  {
    id: 4,
    name: 'Philip',
    review: 'Lorem ipsum dolor sit, amet.',
    photo: Avatar4,
  },
  {
    id: 5,
    name: 'Gemmy',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit ultrices molestie curae mauris aliquam, dictumst lobortis phasellus diam tortor.',
    photo: Avatar5,
  },
  {
    id: 6,
    name: 'Jaz',
    review: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, nostra vitae diam placerat aliquam.',
    photo: Avatar6,
  }
]

const initialState: BreweriesState = {
  userLocation: 'california',
  breweriesList: [],
  breweriesListByLocation: [],
  breweryData: {
    name: '',
    address: '',
    phone: '',
    avatar: Brewery,
    photos: photos,
    userReviews: users,  
  },
}

const breweriesSlice = createSlice({
  name: 'breweries',
  initialState,
  reducers: {
    setBreweries( state, action ){
      state.breweriesList = action.payload;
    },
    setBreweriesFiltered( state, action ){
      state.breweriesListByLocation = action.payload;
    },
    setBrewery( state, action ) {
      state.breweryData.name = action.payload.name
      state.breweryData.address = action.payload.address_1
      state.breweryData.phone = action.payload.phone
    }
  }
});

export const { setBreweries, setBreweriesFiltered, setBrewery } = breweriesSlice.actions
export default breweriesSlice.reducer