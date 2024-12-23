import { useNavigate } from 'react-router-dom';

import Weather from '../../components/Weather'; 
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
			<Weather/>
		</div>
	);
};