import { Link } from "react-router-dom";
import * as S from "../styles/MainPage.styled";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

export default function MainPage() {
  return (
    <>
      <S.HeaderWrapper>
        <Link to="/">
          <h1>ssseeo0 Blog</h1>
        </Link>
      </S.HeaderWrapper>
      <S.Container>
        <S.ContentContainer>
          <Posts />
        </S.ContentContainer>
        <Sidebar />
      </S.Container>
    </>
  );
}
