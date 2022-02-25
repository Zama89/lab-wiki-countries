import {useState} from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import CountriesList from "./components/CountriesList";
import { Routes, Route } from "react-router-dom";
import CountriesJSON from './countries.json';
import CountryDetails from "./components/CountryDetails";

function App() {
    const [countries, setCountries] = useState(CountriesJSON)
    
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <div className="row">
        <CountriesList countries={countries} />
          <Routes>
             <Route path="/:id" element={<CountryDetails />}/>
          </Routes>
        </div>
      </div>
    </div>
    ); 
  }

  
export default App
