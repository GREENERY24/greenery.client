import * as _ from './style';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/Header";
import Arrow  from '../../assets/Arrow.svg';

export default function Start(){
	const navigate = useNavigate();
	return (
		<_.StartMain>
			<Header
        onClick={() => {
          navigate('/');
        }}/>
			<_.StartInfo>
				<_.StartIn>
					<_.StartText>
						<_.StartSlogan>함께 걸어가는 작은 푸르름</_.StartSlogan>
						<_.StartTitle>그리너리</_.StartTitle>
					</_.StartText>
					<_.StartBtn
            onClick={() => {
              navigate('/main');
            }}
					>
						<_.StartBtnText>로그인</_.StartBtnText>
						<img src={Arrow} alt=">" />
					</_.StartBtn>
				</_.StartIn>
			</_.StartInfo>
		</_.StartMain>
	);
}