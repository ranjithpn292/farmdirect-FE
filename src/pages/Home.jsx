import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
`;

const Hero = styled.div`
  max-width: 1100px;
  margin: 140px auto;
  text-align: center;
  padding: 0 20px;

  h2 {
    font-size: 48px;
    color: #1b5e20;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    color: #444;
    margin-bottom: 40px;
  }
`;

const CTAButton = styled(Link)`
  padding: 16px 32px;
  background: #388e3c;
  color: white;
  border-radius: 14px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #1b5e20;
  }
`;

export default function Home() {
  const language = localStorage.getItem("appLanguage");

  return (
    <Page>
      <Navbar />
      <Hero>
        <h2>Welcome to FarmDirect 🌾</h2>
        <p>Selected Language: {language}</p>
        <CTAButton to="/add-stock">Add Your Product</CTAButton>
      </Hero>
    </Page>
  );
}