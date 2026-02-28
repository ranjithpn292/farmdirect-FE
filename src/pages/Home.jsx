import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

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

const SecondaryButton = styled.button`
  margin-top: 15px;
  padding: 14px;
  background: white;
  color: #2e7d32;
  border: 2px solid #2e7d32;
  border-radius: 14px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #e8f5e9;
    transform: scale(1.02);
  }
`;

const Button = styled.button`
  margin-top: 35px;
  padding: 16px;
  background: linear-gradient(135deg, #43a047, #2e7d32);
  color: white;
  border: none;
  border-radius: 16px;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 25px rgba(46, 125, 50, 0.35);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 18px 35px rgba(46, 125, 50, 0.45);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: 0 8px 18px rgba(46, 125, 50, 0.3);
  }

  &:disabled {
    background: #a5d6a7;
    box-shadow: none;
    cursor: not-allowed;
    opacity: 0.8;
  }
`;

export default function Home() {
  const language = localStorage.getItem("appLanguage");
  const { t } = useLanguage();

  const handleContact = () => {
    window.open("https://wa.me/919177388913", "_blank");
    // window.location.href = "tel:+919177388913";
  };

  return (
    <Page>
      <Navbar />
      <Hero>
        <h2>{t.welcome}</h2>
        <p>{t.empowering}</p>
        <p>Selected Language: {language}</p>
        <CTAButton to="/farmer-details">{t.addProduct}</CTAButton>
        <SecondaryButton onClick={handleContact}>
          📞 {t.contactUs}
        </SecondaryButton>
        <p style={{ marginTop: "20px", fontSize: "14px", color: "#555" }}>
          {t.contactDesc}
        </p>
      </Hero>
    </Page>
  );
}
