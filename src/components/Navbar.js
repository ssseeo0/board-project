import { Link } from "react-router-dom";
import * as S from "../styles/Navbar.styled";

export default function Navbar() {
  return (
    <S.HeaderWrapper>
      <Link to="/">
        <h1>ssseeo0 Blog</h1>
      </Link>
    </S.HeaderWrapper>
  );
}
