import styled from "styled-components";

/* =======================
   Styled Components
======================= */

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  display: flex;
  flex-direction: column;
`;

const Navbar = styled.nav`
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

  span {
    cursor: pointer;
    transition: 0.3s;
  }

  span:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MainContainer = styled.div`
  flex: 1;
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
  display: flex;
  gap: 60px;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const InfoSection = styled.div`
  flex: 1;

  h2 {
    font-size: 38px;
    color: #1b5e20;
    margin-bottom: 15px;
  }

  p {
    color: #555;
    margin-bottom: 30px;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const CategoryCard = styled.div`
  flex: 1;
  background: white;
  padding: 22px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

const FormSection = styled.div`
  flex: 1;
  background: white;
  padding: 45px;
  border-radius: 20px;
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: #2e7d32;
  margin-bottom: 20px;
  font-size: 24px;
`;

const Label = styled.label`
  margin-top: 15px;
  font-weight: 500;
`;

const Input = styled.input`
  margin-top: 6px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #4caf50;
  }
`;

const Select = styled.select`
  margin-top: 6px;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 14px;
  background: #388e3c;
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1b5e20;
    transform: scale(1.02);
  }

  &:disabled {
    background: #a5d6a7;
    cursor: not-allowed;
  }
`;

const AlertBox = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 10px;
  background: ${(props) => (props.type === "error" ? "#ffebee" : "#e8f5e9")};
  color: ${(props) => (props.type === "error" ? "#c62828" : "#2e7d32")};
`;

const Footer = styled.footer`
  background: #1b5e20;
  color: white;
  text-align: center;
  padding: 15px;
`;
