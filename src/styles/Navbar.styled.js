import styled from "styled-components";

export const HeaderWrapper = styled.header`
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
