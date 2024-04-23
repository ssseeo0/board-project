import styled from "styled-components";

const PostsContainer = styled.main`
  width: 100%;
  order: 2;
  float: right;
`;

const PostsSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px 24px;
  margin-bottom: 60px;
`;

const Post = styled.article`
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

export default function Posts() {
  return (
    <PostsContainer>
      <PostsSection>
        <Post>
          <h3>미리보기 테스트</h3>
          <p>미리보기 테스트입니다. 포스트 내용의 2줄이 보일 예정</p>
        </Post>
        <Post>
          <h3>미리보기 테스트</h3>
          <p>미리보기 테스트입니다. 포스트 내용의 2줄이 보일 예정</p>
        </Post>
        <Post>
          <h3>미리보기 테스트</h3>
          <p>미리보기 테스트입니다. 포스트 내용의 2줄이 보일 예정</p>
        </Post>
        <Post>
          <h3>미리보기 테스트</h3>
          <p>미리보기 테스트입니다. 포스트 내용의 2줄이 보일 예정</p>
        </Post>
        <Post>
          <h3>미리보기 테스트</h3>
          <p>미리보기 테스트입니다. 포스트 내용의 2줄이 보일 예정</p>
        </Post>
        <Post>
          <h3>미리보기 테스트</h3>
          <p>미리보기 테스트입니다. 포스트 내용의 2줄이 보일 예정</p>
        </Post>
      </PostsSection>
    </PostsContainer>
  );
}
