const WeatherData = ({ day, condition, time }) => {
    return (
        <>
            <h2>{day}</h2>
            <p><span>Conditions: </span>{condition}</p>
            <p><span>Time: </span>{time}</p>
        </>
    )
}

export default WeatherData;