const WeatherForcast = ({ weather }) => {
    return (
        <>
            <div className="weather">
                <h2>{weather.day}</h2>
                <img src={weather.img} alt={weather.imgAlt} />
                <p><span>Conditions: </span>{weather.conditons}</p>
                <p><span>Time: </span>{weather.time}</p>
            </div>

        </>
    )
}

export default WeatherForcast;