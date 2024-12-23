import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Pot from '../../assets/Pot.svg';
//날씨 사진
import Sun from '../../assets/weather/날씨=낮_맑음.svg';

// import * as _ from './style';
export default function MainView(){
	const navigate = useNavigate();
	return(
		<div>
			<Header
        onClick={() => {
          navigate('/main');
        }}
			/>
			<div>
				<div>
					<img src={Sun} alt="" />
					<img src={Pot} alt="" />
				</div>
				<div>
					<div>온/습도</div>
					<div>구조도</div>
				</div>
			</div>
		</div>
	);
};