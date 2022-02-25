import {useParams} from "react-router-dom"
import countriesJSON from "../countries.json";
  
  function CountryDetails(){
      const {id}=useParams();//alpha3Code;

      /* 
  const [foundCountry, setFoundCountry] = useState('');
  useEffect(() => {
    const country = countriesData.find((countryObj) => {
      return countryObj._id === country.alpha3Code;
    });
    if (country) {
      setFoundCountry(foundCountry);
    }
  }, []); */
     
      const country = countriesJSON.find(element=>element.alpha3Code===id);
      return(
          <div className="CountryDetails">
              <img src={`https://flagpedia.net/data/flags/w702/${country.alpha2Code.toLowerCase()}.png`} alt=""/>
              <p>{country.name.common}</p>
              <p> Capital: {country.capital}</p>
              <p> Area: {country.area} km2</p>
              <p>Border: {country.borders}</p>
          </div>
      );
  }
  
  export default CountryDetails;