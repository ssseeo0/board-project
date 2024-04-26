import styled from "styled-components";

export const Aside = styled.aside`
  width: 216px;
  order: 1;
  float: left;
`;

export const ProfileWrapper = styled.div`
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

export const SearchWrapper = styled.div`
  margin-top: 15px;

  input {
    border: 1px solid #ededed;
    padding: 10px 5px;
    font-size: 13px;
    width: 100%;
  }
`;

export const MenuContainer = styled.div`
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
