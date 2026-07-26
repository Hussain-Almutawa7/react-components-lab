const WeatherData = ({ day, condition, time }) => {
    return (
        <>
            <p><span>Conditions: </span>{condition}</p>
            <p><span>Time: </span>{time}</p>
        </>
    )
}

export default WeatherData;