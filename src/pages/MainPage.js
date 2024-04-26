import * as S from "../styles/MainPage.styled";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

export default function MainPage() {
  return (
    <>
      <S.Container>
        <S.ContentContainer>
          <Posts />
        </S.ContentContainer>
        <Sidebar />
      </S.Container>
    </>
  );
}
