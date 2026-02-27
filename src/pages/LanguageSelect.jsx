import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: 60px;
  border-radius: 28px;
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: ${fadeIn} 0.6s ease;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #1b5e20;
  margin-bottom: 40px;
`;

const LanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
`;

const LangButton = styled.button`
  padding: 18px;
  border-radius: 16px;
  border: none;
  background: #388e3c;
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1b5e20;
    transform: translateY(-4px);
  }
`;

export default function LanguageSelect() {
  const navigate = useNavigate();
  const { setLanguage } = useLanguage();

  const selectLanguage = (lang) => {
    setLanguage(lang);
    navigate("/home");
  };

  return (
    <Page>
      <Card>
        <Title>Select Your Language 🌍</Title>
        <LanguageGrid>
          <LangButton onClick={() => selectLanguage("English")}>
            English
          </LangButton>
          <LangButton onClick={() => selectLanguage("Telugu")}>
            తెలుగు
          </LangButton>
          <LangButton onClick={() => selectLanguage("Kannada")}>
            ಕನ್ನಡ
          </LangButton>
        </LanguageGrid>
      </Card>
    </Page>
  );
}
