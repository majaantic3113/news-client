const config = {
  getApiKey() {
    return process.env.REACT_APP_API_KEY;
  },
  getApiBaseUrl() {
    return process.env.REACT_APP_API_BASE_URL;
  },
  getCountries() {
    const countries = process.env.REACT_APP_COUNTRIES
      ? process.env.REACT_APP_COUNTRIES
      : "gb,us";
    return countries.split(",");
  },
};

export default config;