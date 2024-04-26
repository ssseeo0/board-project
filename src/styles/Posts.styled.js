import styled from "styled-components";

export const PostsContainer = styled.main`
  width: 100%;
  order: 2;
  float: right;
`;

export const PostsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 24px;
  margin-bottom: 60px;
`;

export const Post = styled.article`
  border-radius: 10px;
  box-shadow: 0 10px 25px -10px rgb(0 0 0 / 10%), 0 0 7px rgb(0 0 0 / 5%);
  padding: 20px 20px;
  cursor: pointer;
  height: 110px;
  overflow: hidden;

  h3 {
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 20px;
  }

  p {
    font-size: 13px;
    line-height: 17px;
    overflow: hidden;
  }
`;
