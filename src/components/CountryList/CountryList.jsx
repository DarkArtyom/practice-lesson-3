import { CountryInfo, Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <>
      <h2>CountryList</h2>
      <Grid>
        {countries.map(
          ({ flag, capital, country, id, languages = [], population }) => {
            return (
              <GridItem key={id}>
                <CountryInfo
                  flag={flag}
                  capital={capital}
                  country={country}
                  id={id}
                  languages={languages}
                  population={population}
                />
              </GridItem>
            );
          }
        )}
      </Grid>
    </>
  );
};
