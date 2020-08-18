export class API {
    API_KEY = 'f901ivabhvt4pMh4W2wStKhVEGrkfOz2tR6E7wGHgalcU'
    // CDF - EEK - ERN - LTL - LVL - TOP - ZWL

    get getData() {return this.data}
    set setData(data) {this.data = Object.assign({}, data)}

    async getWeather(mode) {
        let coords
        if (mode) {
            coords = this.currentLocation.coords
        } else {
            coords = this.location.coords
        }

        const URL_ONE_CALL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&exclude=minutely&appid=${this.API_KEY}`

        const res = await fetch(URL_ONE_CALL)
        const rawData = await res.json()

        console.log(URL_ONE_CALL);
        this.saveData(rawData)
    }
    saveData(rawData) {
        // Reiniciando la plantilla del objeto
        this.data = { hourly : [], daily : [] }

        this.data.timezone = rawData.timezone
        this.data.currentTime = this.formattingHour(rawData.current.dt)

        this.data.temp = rawData.current.temp
        this.data.feels_like = rawData.current.feels_like
        this.data.main = rawData.current.weather[0].main
        this.data.description = rawData.current.weather[0].description
        this.data.icon = rawData.current.weather[0].icon

        this.data.clouds = rawData.current.clouds
        this.data.wind_speed = rawData.current.wind_speed
        this.data.pressure = rawData.current.pressure
        this.data.humidity = rawData.current.humidity

    }
    
}