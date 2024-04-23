import { Link } from "react-router-dom";
import styled from "styled-components";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

const HeaderWrapper = styled.header`
  background-color: rgb(255 255 255 / 80%);
  border-bottom: 1px solid rgb(248, 248, 248);
  padding: 20px 0 20px;
  position: sticky;
  top: 0;
  z-index: 999;
  margin-bottom: 40px;

  h1 {
    font-size: 18px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 50px;
`;

const ContentContainer = styled.main`
  width: 100%;
  order: 2;
  float: right;
`;

export default function MainPage() {
  return (
    <>
      <HeaderWrapper>
        <Link to="/">
          <h1>ssseeo0 Blog</h1>
        </Link>
      </HeaderWrapper>
      <Container>
        <ContentContainer>
          <Posts />
        </ContentContainer>
        <Sidebar />
      </Container>
    </>
  );
}
