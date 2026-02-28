import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const NavbarWrapper = styled.nav`
  background: #1b5e20;
  padding: 18px 30px;
  color: white;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 22px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 25px;

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Navbar() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <NavbarWrapper>
      <NavContent>
        <Logo onClick={handleClick}>🌿 FarmDirect</Logo>
        <NavLinks>
          {/* <Link to="/">{t.homeNav}</Link>
          <Link to="/add-stock">{t.addStockNav}</Link> */}
        </NavLinks>
      </NavContent>
    </NavbarWrapper>
  );
}
