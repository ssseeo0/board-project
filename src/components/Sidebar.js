import styled from "styled-components";
import profileImg from "../assets/profile.jpg";
import { Link } from "react-router-dom";

const Aside = styled.aside`
  width: 216px;
  order: 1;
  float: left;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  img {
    width: 140px;
    height: 140px;
    margin: 0;
    border-radius: 140px;
    cursor: pointer;
  }

  h2 {
    font-size: 13px;
  }
`;

const SearchWrapper = styled.div`
  margin-top: 15px;

  input {
    border: 1px solid #ededed;
    padding: 10px 5px;
    font-size: 13px;
    width: 100%;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;

  a {
    font-size: 15px;
    font-weight: 600;
    color: black;
  }
`;

export default function Sidebar() {
  return (
    <>
      <Aside>
        <ProfileWrapper>
          <Link to="/">
            <img alt="프로필 이미지" src={profileImg} />
          </Link>
          <h2>개발 공부 일지</h2>
        </ProfileWrapper>
        <SearchWrapper>
          <input type="text" />
        </SearchWrapper>
        <MenuContainer>
          <Link to="/">홈</Link>
          <Link to="/">글쓰기</Link>
        </MenuContainer>
      </Aside>
    </>
  );
}
