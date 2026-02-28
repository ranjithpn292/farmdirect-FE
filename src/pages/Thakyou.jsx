import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

/* Animation */
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
`;

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled.div`
  background: white;
  padding: 70px;
  border-radius: 28px;
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.15);
  text-align: center;
  animation: ${fadeIn} 0.5s ease;
`;

const Icon = styled.div`
  font-size: 60px;
  margin-bottom: 25px;
`;

const Title = styled.h2`
  color: #2e7d32;
  font-size: 30px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  color: #444;
  font-size: 16px;
  margin-bottom: 30px;
`;

const Button = styled.button`
  padding: 14px 28px;
  background: linear-gradient(135deg, #43a047, #2e7d32);
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

export default function ThankYou() {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <Page>
      <Navbar />
      <Wrapper>
        <Card>
          <Icon>✅</Icon>
          <Title>{t.thankYouTitle}</Title>
          <Description>{t.thankYouMessage}</Description>
          <Button onClick={() => navigate("/home")}>
            {t.goHome}
          </Button>
        </Card>
      </Wrapper>
    </Page>
  );
}