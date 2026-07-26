import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData";

const WeatherForcast = ({ weather }) => {
    return (
        <>
            <div className="weather">
                <h2>{weather.day}</h2>
                <WeatherIcon img={weather.img} imgAlt={weather.imgAlt} />

                <WeatherData condition={weather.condition} time={weather.time} />
            </div >
        </>
    )
}

export default WeatherForcast;