import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  flag,
  capital,
  country,
  // id,
  languages = [],
  population,
}) => {
  const languageCountry = Object.values(languages).join(', ');

  return (
    <CountryWrapper>
      <Flag>
        <Image src={flag} />
      </Flag>
      <CountryDescription>
        <CountryCapital>
          Capital: <Accent>{capital}</Accent>
        </CountryCapital>

        <CountryTitle>{country}</CountryTitle>

        <CountryDetail>
          Population: <Accent>{population}</Accent>
        </CountryDetail>

        <CountryDetail>
          Languages: <Accent>{languageCountry}</Accent>
        </CountryDetail>
      </CountryDescription>
    </CountryWrapper>
  );
};
