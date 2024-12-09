import * as _ from './style';
function Header( {onClick} ){
  return(
    <_.HeaderDiv
      onClick={onClick}
    >
      <_.HeaderTitle>그리너리</_.HeaderTitle>
    </_.HeaderDiv>
  );
}
export default Header;