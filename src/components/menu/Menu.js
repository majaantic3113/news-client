import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = () => {
  const { supportedCountries, activeCountry } = useSelector(
    (state) => state.countries
  );

  return (
    <div>
      <Link to={`/country/${activeCountry}/`}>Top news </Link>
      <Link to={`/country/${activeCountry}/categories`}> Categories</Link>
      <Link to={`/country/${activeCountry}/search`}> Search </Link>
      {supportedCountries.map((country) => (
        <Link key={country} to={`/country/${country}/`}>
          {country.toUpperCase() + " "}
        </Link>
      ))}
    </div>
  );
};

export default Menu;
