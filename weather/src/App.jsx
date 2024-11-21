import { useState, useEffect, useRef } from 'react';
import './index.css'; 
import SendApiCall from './components/ApiCall.jsx';
import Data from './components/Data.jsx';

function App() {
  const cityInputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);



  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = cityInputRef.current.value;
    if (city.trim() === "") return; 
    setLoading(true);
    const data = await SendApiCall(city);
    setWeatherData(data);
    setLoading(false);
  };

  
  useEffect(() => {
    console.log("Updated weatherData:", weatherData);
  }, [weatherData]);

  
  function CityInput() {
    return (
      <div style={{ margin: 0, padding: 0, marginTop: 40 }}>
        <div className="cityin">
          <form id="cityinform" onSubmit={handleSubmit}>
            <div
              style={{
                display: 'flex',
                margin: 20,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <h1>Which city is cooking?</h1>
              <input
                id="city"
                type="text"
                
                ref={cityInputRef} 
                placeholder="City Name or coordinates"
                style={{
                  height: 35,
                  width: 250,
                  backgroundImage: 'linear-gradient(85deg, rgba(252, 243, 38, 0.2), rgba(4, 200, 209, 0.2))',
                  borderStyle: 'none',
                  borderRadius: 20,
                  padding: '2%',
                  boxSizing: 'border-box',
                }}
              />
              <br />
              <input
                id="submitcity"
                type="submit"
                value="Submit"
                style={{
                  height: 40,
                  width: 80,
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: 30,
                  borderStyle: 'none',
                }}
              />
            </div>
          </form>
        </div>

       
      </div>
    );
  }


  
    return <div>
    <CityInput />
    {weatherData && <Data weatherData={weatherData} />}
    <div>
          {loading 
            ? "Loading..." 
            : weatherData 
              ? "Fetched successfully!" 
              : "Enter a city and submit"}
        </div>
  </div>
}

  export default App
