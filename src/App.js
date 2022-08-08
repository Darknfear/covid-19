import { useEffect } from 'react';
import { getCountries } from './apis';
import { CountrySelector, HighLight, Summary } from './components';
function App() {
  useEffect(() => {
    getCountries()
    .then((res) => {
      console.log({res});
    })
  }, [])
  return (
    <>
      <CountrySelector />
      <HighLight />
      <Summary />
    </>
  );
}

export default App;
