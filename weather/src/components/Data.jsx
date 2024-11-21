import '../data.css'

function Data({weatherData}){

    const a = weatherData.list[1];
    return <div className='dataparent'>
        <div className="data">
            <h3>Temperature</h3>
            <p>{(a.main.temp - 273.15).toFixed(2)} °C</p>
        </div>
        <div className="data">
            <h3>Humidity</h3>
            <p>{a.main.humidity}</p>
        </div>
        <div className="data">
            <h3>clouds</h3>
            <p>{a.clouds.all}</p>
        </div>
        <div className="data">
            <h3>Wind speed</h3>
            <p>{a.wind.speed}</p>
        </div>
    </div>
}

export default Data