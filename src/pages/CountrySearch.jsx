import { useState, useEffect } from 'react';
import { fetchByRegion } from 'service/country-service';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const [region, setRegion] = useState('');
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!region) {
      return;
    }
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetchByRegion(region, controller.signal);
        console.log(response);
        setCountries(response);
      } catch (error) {
        setError('Ops');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => {
      controller.abort();
    };
  }, [region]);

  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={setRegion} />
        {countries.length !== 0 && <CountryList countries={countries} />}
      </Container>
    </Section>
  );
};
