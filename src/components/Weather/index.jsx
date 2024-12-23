import { Component } from 'react';
import axios from 'axios';

import Pot from '../../assets/Pot.svg';
class Weather extends Component {
  // 상태 변수 정의
  constructor(props){
    super(props);
    this.state = {
      temp: 0,
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
        <div>
						<div>
							<img src={imgSrc} alt="Weather icon" style={{ width: '10rem' }} />
							<img src={Pot} alt="" />
						</div>
						<div>
							<div>
								<div>온도 : {(this.state.temp - 273.15).toFixed(0)}°</div>
								<div>습도 : {this.state.humidity}%</div>
							</div>
							<div>부르기</div>
						</div>
        </div>
      );
    }
  }
}

export default Weather;
