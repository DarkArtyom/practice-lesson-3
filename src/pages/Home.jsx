import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';
export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getCountries(controller.signal);
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
  }, []);
  useEffect(() => {
    if (!error) {
      return;
    }
    alert(error);
  }, [error]);
  return (
    <Section>
      <Container>
        <h2>Home</h2>
      </Container>
      {countries.length > 0 && <CountryList countries={countries} />}
    </Section>
  );
};
