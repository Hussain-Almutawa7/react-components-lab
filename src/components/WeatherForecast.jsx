import WeatherIcon from "./WeatherIcon"
import WeatherData from "./WeatherData";

const WeatherForcast = ({ weather }) => {
    return (
        <>
            <div className="weather">
                <WeatherIcon img={weather.img} imgAlt={weather.imgAlt} />

                <WeatherData day={weather.day} condition={weather.condition} time={weather.time} />
            </div >
        </>
    )
}

export default WeatherForcast;