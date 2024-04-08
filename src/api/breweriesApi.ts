import axios from "axios";

export const breweriesApi = axios.create({
  baseURL: 'https://api.openbrewerydb.org/v1/breweries'
})