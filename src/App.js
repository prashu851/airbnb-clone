import './App.css';
import Header from './Header';
import Footer from './Footer';
import Locations from './Locations';
import temp from "./locationsData.json"
import { useEffect, useState } from 'react';
import Popup from './Popup';

function App() {
  const [locData, setLocData] = useState([]);
  const [country, setCountry] = useState('');
  const [sliderValue, setSliderValue] = useState(100000)
  const [destinationData, setDestinationData] = useState(temp.locationsData);
  useEffect(() => {
    const unique = [...new Set(temp.locationsData.map(({ country }) => country))];
    setLocData(unique);
  }, []);
  
  const getSearchedDestination = (location) => {
    setCountry(location)
    searchAndFilter(sliderValue,location)
  }

  const clearSearchText = (location) => {
    setCountry(location)
    searchAndFilter(sliderValue,location)
  }

  const getFilterValue = (value) => {
    setSliderValue(value);
    searchAndFilter(value,country)
  }

  const searchAndFilter = (selectedSliderValue, selectedCountry) => {
    if(selectedCountry !== '') {
      const searchData = temp.locationsData.filter(data => data.country === selectedCountry && data.price <= selectedSliderValue)
      setDestinationData(searchData)
    }
    else {
      const searchData = temp.locationsData.filter(data => data.price <= selectedSliderValue)
    setDestinationData(searchData)
    }
  }

  return (
    <div className="App">
      <Header locData={locData} getSearchedDestination={getSearchedDestination} clearSearchText={clearSearchText} getFilterValue={getFilterValue} sliderValue={sliderValue} />
      <Popup />
      <Locations destinationData={destinationData} />
      <Footer />
    </div>
  );
}

export default App;
