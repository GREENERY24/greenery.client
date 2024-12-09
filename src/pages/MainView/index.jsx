import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";

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
					<img src="/" alt="" />
					<img src="/" alt="" />
				</div>
				<div>
					<div>온/습도</div>
					<div>구조도</div>
				</div>
			</div>
		</div>
	);
};