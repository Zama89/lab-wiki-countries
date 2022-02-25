import {Link} from 'react-router-dom';

function CountriesList({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <Link to={`/${country.alpha3Code}`} key={country.alpha3Code}>
          <div>
            <img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}/>
            <h1>{country.name.common}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CountriesList;