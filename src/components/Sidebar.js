import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";
import * as S from "../styles/Sidebar.styled";

export default function Sidebar() {
  return (
    <>
      <S.Aside>
        <S.ProfileWrapper>
          <Link to="/">
            <img alt="프로필 이미지" src={profileImg} />
          </Link>
          <h2>개발 공부 일지</h2>
        </S.ProfileWrapper>
        <S.SearchWrapper>
          <input type="text" />
        </S.SearchWrapper>
        <S.MenuContainer>
          <Link to="/">홈</Link>
          <Link to="/write">글쓰기</Link>
        </S.MenuContainer>
      </S.Aside>
    </>
  );
}
