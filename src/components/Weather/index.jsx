import { Component } from 'react';
import axios from 'axios';

class Weather extends  Component {
  // 상태 변수 정의
  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      temp_max: 0,
      temp_min: 0,
      humidity: 0,
      desc: '',
      icon: '',
      loading: true,
    };
  }
  // 컴포넌트 생성 후 날씨 정보 조회
  componentDidMount() {
		const cityName = 'Busan';
		const apiKey = import.meta.env.VITE_WEATHER_KEY; // Vite에서는 process.env 대신 import.meta.env 사용
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
	
  // 상태 변수에 값을 전달
  axios
    .get(url)
    .then((responseData) => {
      console.log(responseData);
      const data = responseData.data;
      this.setState({
        temp: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
}
  // 날씨 정보 출력
  render() {
    const imgSrc = `https://openweathermap.com/img/w/${this.state.icon}.png`;
    if (this.state.loading) {
      return <p>Loading</p>;
    } else {
      return (
        <div style={{ padding: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: '48px', margin: 0 }}>
                {(this.state.temp - 273.15).toFixed(0)}°
              </h1>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px' }}>
                <img src={imgSrc} alt="Weather icon" style={{ width: '50px' }} />
              </div>
              <p style={{ margin: 0, fontSize: '16px' }}>{this.state.desc}</p>
            </div>
          </div>

          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <p style={{ margin: 0 }}>
              최고: {(this.state.temp_max - 273.15).toFixed(0)}° 최저: {(this.state.temp_min - 273.15).toFixed(0)}°
            </p>
            <p style={{ display: 'flex', alignItems: 'center', margin: 0 }}>
              {/* <SlDrop size="17px" style={{ marginTop: '7px', marginRight: '8px' }} /> */}
              {this.state.humidity}%
            </p>
          </div>
        </div>
      );
    }
  }
}

export default Weather;
