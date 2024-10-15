const apiKey = 'c93f0f97ed764fb3a54417272415101';  // API key yang Anda dapatkan
const city = 'Jakarta';

// URL untuk API WeatherAPI
const apiURL = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7`;

// Fetch data dari WeatherAPI
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);

        // Menampilkan cuaca hari ini
        const currentWeatherDiv = document.getElementById('current-weather');
        const currentWeather = data.current;
        currentWeatherDiv.innerHTML = `
            <h2>Cuaca Hari Ini</h2>
            <img src="https:${currentWeather.condition.icon}" alt="icon cuaca";>
            <p>Suhu: ${currentWeather.temp_c}°C</p>
            <p>Deskripsi: ${currentWeather.condition.text}</p>
            <p>Kecepatan Angin: ${currentWeather.wind_kph} km/h</p>
            <p>Kelembapan: ${currentWeather.humidity}%</p>
        `;

        // Menampilkan ramalan cuaca 7 hari ke depan
        const forecastDiv = document.getElementById('weather-forecast');
        let forecastHTML = '';
        data.forecast.forecastday.forEach((day) => {
            const date = new Date(day.date);
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString('id-ID', options);

            forecastHTML += `
                <div class="day">
                    <h4>${formattedDate}</h4>
                    <img src="https:${day.day.condition.icon}" alt="icon cuaca hari";>
                    <p>Suhu Siang: ${day.day.maxtemp_c}°C</p>
                    <p>Suhu Malam: ${day.day.mintemp_c}°C</p>
                    <p>Cuaca: ${day.day.condition.text}</p>
                </div>
            `;
        });
        forecastDiv.innerHTML = forecastHTML;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('current-weather').innerHTML = '<p>Terjadi kesalahan saat mengambil data cuaca.</p>';
        document.getElementById('weather-forecast').innerHTML = '<p>Ramalan cuaca tidak dapat ditampilkan.</p>';
    });

