import { useState } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

/* =========================
   Animations
========================= */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* =========================
   Layout
========================= */

const Page = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #e8f5e9, #c8e6c9);
  display: flex;
  flex-direction: column;
  font-family: "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  padding: 60px 60px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 80px;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
`;

/* =========================
   Left Hero Section
========================= */

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 48px;
    color: #1b5e20;
    margin-bottom: 20px;
    line-height: 1.2;
  }

  p {
    font-size: 18px;
    color: #444;
    margin-bottom: 40px;
    max-width: 500px;
    line-height: 1.7;
  }
`;

const Categories = styled.div`
  display: flex;
  gap: 25px;
`;

const CategoryCard = styled.div`
  flex: 1;
  padding: 25px;
  background: white;
  border-radius: 18px;
  color: black;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: 0.3s;

  &:hover {
    transform: translateY(-8px);
    background: #e8f5e9;
  }
`;

/* =========================
   Form Section
========================= */

const FormCard = styled.div`
  background: white;
  padding: 50px;
  border-radius: 24px;
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 26px;
  color: #2e7d32;
  margin-bottom: 25px;
`;

const SubHeading = styled.h4`
  margin-top: 22px;
  color: #1b5e20;
  font-size: 15px;
  font-weight: 600;
`;

const Input = styled.input`
  margin-top: 8px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
  }
`;

const Select = styled.select`
  margin-top: 8px;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #4caf50;
  }
`;

const Button = styled.button`
  margin-top: 35px;
  padding: 16px;
  background: #388e3c;
  color: white;
  border: none;
  border-radius: 14px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #1b5e20;
    transform: scale(1.03);
  }

  &:disabled {
    background: #a5d6a7;
    cursor: not-allowed;
  }
`;

const AlertBox = styled.div`
  padding: 12px;
  border-radius: 10px;
  margin-bottom: 15px;
  background: ${(props) => (props.type === "error" ? "#ffebee" : "#e8f5e9")};
  color: ${(props) => (props.type === "error" ? "#c62828" : "#2e7d32")};
`;

const Footer = styled.footer`
  background: #1b5e20;
  color: white;
  text-align: center;
  padding: 18px;
`;

/* =========================
   Component Logic
========================= */

export default function AddStock() {
  const { t } = useLanguage();
  const farmerDetails = JSON.parse(localStorage.getItem("farmerDetails"));

  const [data, setData] = useState({
    category: "Coconuts",
    productType: "",
    quantity: "",
    pricePerUnit: "",
    location: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const fruitsList = t.fruitsList;
  const vegetablesList = t.vegetablesList;

  const handleSubmit = async () => {
    setError("");
    setSuccess(false);

    if (!data.quantity || !data.pricePerUnit || !data.location) {
      setError(t.fillDetails);
      return;
    }

    if (data.category !== "Coconuts" && !data.productType) {
      setError(t.selectProductType);
      return;
    }

    try {
      setLoading(true);
      await axios.post("http://localhost:8080/api/coconuts", data);
      setSuccess(true);
      setData({
        category: t.coconuts,
        productType: "",
        quantity: "",
        pricePerUnit: "",
        location: "",
      });
    } catch {
      setError(t.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Navbar />

      <ContentWrapper>
        <Container>
          <InfoSection>
            <h2>{t.growTitle}</h2>
            <p>{t.growDesc}</p>

            <Categories>
              <CategoryCard>🌴 {t.coconuts}</CategoryCard>
              <CategoryCard>🍎 {t.fruits}</CategoryCard>
              <CategoryCard>🥕 {t.vegetables}</CategoryCard>
            </Categories>
          </InfoSection>

          <FormCard>
            <Title>{t.addProductStock}</Title>

            {error && <AlertBox type="error">{error}</AlertBox>}
            {success && <AlertBox>{t.successMessage}</AlertBox>}

            <SubHeading>{t.productCategory}</SubHeading>
            <Select
              value={data.category}
              onChange={(e) =>
                setData({
                  ...data,
                  category: e.target.value,
                  productType: "",
                  quantity: "",
                })
              }
            >
              <option>{t.coconuts}</option>
              <option>{t.fruits}</option>
              <option>{t.vegetables}</option>
            </Select>

            {data.category !== "Coconuts" && (
              <>
                <SubHeading>Select {data.category} Type</SubHeading>
                <Select
                  value={data.productType}
                  onChange={(e) =>
                    setData({ ...data, productType: e.target.value })
                  }
                >
                  <option value="">{t.selectType}</option>
                  {(data.category === t.fruits
                    ? fruitsList
                    : vegetablesList
                  ).map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </Select>
              </>
            )}

            <SubHeading>
              {data.category === "Coconuts" ? t.quantityPieces : t.quantityKg}
            </SubHeading>
            <Input
              type="number"
              value={data.quantity}
              onChange={(e) => setData({ ...data, quantity: e.target.value })}
            />

            <SubHeading>{t.price}</SubHeading>
            <Input
              type="number"
              value={data.pricePerUnit}
              onChange={(e) =>
                setData({ ...data, pricePerUnit: e.target.value })
              }
            />

            <SubHeading>{t.location}</SubHeading>
            <Input
              type="text"
              value={data.location}
              onChange={(e) => setData({ ...data, location: e.target.value })}
            />

            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Submitting..." : t.submit}
            </Button>
          </FormCard>
        </Container>
      </ContentWrapper>

      <Footer>© 2026 FarmDirect | Empowering Farmers 🌾</Footer>
    </Page>
  );
}
