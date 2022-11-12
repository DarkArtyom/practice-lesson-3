import axios from 'axios';
import { transformCountriesData, transformCountryData } from 'helpers';

axios.defaults.baseURL = 'https://restcountries.com/v3.1';

export const getCountries = async signal => {
  try {
    const { data } = await axios.get('/region/europe', { signal });
    const countries = transformCountriesData(data);

    return countries;
  } catch (error) {
    if (axios.isCancel) {
      return [];
    }
    throw new Error(error);
  }
};

export const fetchCountry = async name => {
  const { data } = await axios.get(`/name/${name}`);
  const country = transformCountryData(data);

  return country[0];
};

export const fetchByRegion = async region => {
  const { data } = await axios.get(`/region/${region}`);
  const countries = transformCountriesData(data);

  return countries;
};
