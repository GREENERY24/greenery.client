import styled from 'styled-components';

export const StartMain = styled.div`
	width: 100vw;
	height: 100vh;
`;
export const StartInfo = styled.div`
	display: flex;
	width: 603px;
	flex-direction: column;
	align-items: flex-start;
	gap: 24px;
`; 
export const StartIn = styled.div`
	display: flex;
	margin: 24vh 8rem;
	flex-direction: column;
	align-items: flex-start;
	gap: 10px;
	flex-shrink: 0;
`;

export const StartText = styled.div`
	display: flex;
	width: 38rem;
	flex-direction: column;
	align-items: flex-start;
`;
export const StartSlogan = styled.h4`
	color: #000;
	text-align: right;
	font-family: Interop;
	font-size: 36px;
	font-style: normal;
	font-weight: 300;
	line-height: normal;
`;
export const StartTitle = styled.h1`
	color: #A2DC7F;
	font-family: ChangwonDangamAsac;
	font-size: 132px;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
`;
export const StartBtn = styled.button`
	display: flex;
	padding: 10px 24px 10px 32px;
	justify-content: center;
	align-items: center;
	gap: 0.75rem;
	border-radius: 3rem;
	border: 2px solid #FFF;
	background: #A2DC7F;
`;
export const StartBtnText = styled.p`
	color: #FFF;
	font-family: Interop;
	font-size: 24px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;