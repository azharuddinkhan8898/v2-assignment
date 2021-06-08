import { Container } from 'react-bootstrap';
import UserForm from './components/Form/Form'
import Header from './components/Header/Header'
import { useEffect, useRef, useState } from "react";
import DataTable from './components/DataTable/DataTable';



function App() {
  const [userData, setUserData] = useState(null);
  const [tempUserData, setTempUserData] = useState(null);
  const [countryDetails, setCountryDetails] = useState(null);

  let lastCountry = useRef("")

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data/user.json');
      const data = await res.json();
      setUserData(data[0])
      setTempUserData(data[0])
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (tempUserData) {

      const fetchCountry = async () => {
        const res = await fetch(`/data/countries/${tempUserData.country.toLowerCase()}.json`);
        const data = await res.json();
        setCountryDetails({ ...countryDetails, [tempUserData.country.toLowerCase()]: data })
      }
      if (lastCountry.current !== tempUserData.country && !countryDetails && tempUserData.country !== "NA") {
        fetchCountry()
      } else if (lastCountry.current !== tempUserData.country && !countryDetails[tempUserData.country.toLowerCase()]) {
        fetchCountry()
      }
      lastCountry.current = tempUserData.country;

    }
  }, [tempUserData])

  return (
    <div className="App">
      <Header />
      <Container>
        {
          tempUserData && countryDetails && <UserForm tempUserData={tempUserData} setTempUserData={setTempUserData} setUserData={setUserData} countryDetails={countryDetails} />
        }

        {
          userData && <DataTable userData={userData}/>
        }

      </Container>
    </div>
  );
}

export default App;
