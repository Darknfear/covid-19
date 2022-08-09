import { useEffect, useState } from 'react';
import { getCountries } from './apis';
import { CountrySelector, HighLight, Summary } from './components';
function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    getCountries()
    .then((res) => {
      console.log({res});
      setCountries(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <>
      <CountrySelector countries={countries}/>
      <HighLight />
      <Summary />
    </>
  );
}

export default App;
