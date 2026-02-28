import { useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useLanguage } from "../context/LanguageContext";

/* Animation */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* Layout */
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
  max-width: 1200px;
  margin: auto;
  padding: 60px;
  animation: ${fadeIn} 0.6s ease;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Card = styled.div`
  background: white;
  padding: 60px;
  border-radius: 28px;
  box-shadow: 0 25px 55px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 35px 25px;
  }
`;

const Title = styled.h2`
  font-size: 34px;
  color: #1b5e20;
  margin-bottom: 35px;
  text-align: center;
`;

const SubHeading = styled.h4`
  margin-top: 25px;
  font-size: 15px;
  color: #2e7d32;
  font-weight: 600;
`;

const Input = styled.input`
  margin-top: 10px;
  padding: 15px;
  border-radius: 14px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  transition: 0.3s;

  &:focus {
    border-color: #4caf50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
  }
`;

const FieldError = styled.span`
  color: #c62828;
  font-size: 13px;
  margin-top: 6px;
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 18px;
  background: linear-gradient(135deg, #43a047, #2e7d32);
  color: white;
  border: none;
  border-radius: 18px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 15px 30px rgba(46, 125, 50, 0.3);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 40px rgba(46, 125, 50, 0.4);
  }
`;

const AlertBox = styled.div`
  padding: 14px;
  border-radius: 12px;
  margin-bottom: 20px;
  background: #ffebee;
  color: #c62828;
  font-weight: 500;
`;

export default function FarmerDetails() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    village: "",
    district: "",
  });

  const topRef = useRef(null);

  const [farmer, setFarmer] = useState({
    name: "",
    phone: "",
    village: "",
    district: "",
  });

  const handleNext = () => {
    let hasError = false;

    const newErrors = {
      name: "",
      phone: "",
      village: "",
      district: "",
    };

    if (!farmer.name.trim()) {
      newErrors.name = "Name is required";
      hasError = true;
    } else if (!/^[0-9]+$/.test(farmer.phone.trim())) {
      newErrors.phone = "Phone number must contain only digits";
      hasError = true;
    } else if (farmer.phone.trim().length < 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
      hasError = true;
    } else if (farmer.phone.trim().length > 10) {
      newErrors.phone = "Phone number cannot exceed 10 digits";
      hasError = true;
    }

    if (!farmer.phone.trim()) {
      newErrors.phone = "Phone number is required";
      hasError = true;
    }

    if (!farmer.village.trim()) {
      newErrors.village = "Village name is required";
      hasError = true;
    }

    if (!farmer.district.trim()) {
      newErrors.district = "District is required";
      hasError = true;
    }

    setErrors(newErrors); // ✅ Only one state update

    if (hasError) {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      return;
    }

    localStorage.setItem("farmerDetails", JSON.stringify(farmer));
    navigate("/add-stock");
  };

  return (
    <Page>
      <Navbar />

      <ContentWrapper>
        <Container>
          <Card ref={topRef}>
            <Title>{t.farmerDetailsTitle}</Title>

            <SubHeading>{t.name}</SubHeading>
            <Input
              value={farmer.name}
              onChange={(e) => {
                setFarmer({ ...farmer, name: e.target.value });
                setErrors({ name: "" });
              }}
              placeholder={t.enterName}
            />
            {errors.name && <FieldError>{errors.name}</FieldError>}

            <SubHeading>{t.phoneNumber}</SubHeading>
            <Input
              type="tel"
              value={farmer.phone}
              onChange={(e) => setFarmer({ ...farmer, phone: e.target.value })}
              placeholder={t.enterPhone}
            />
            {errors.phone && <FieldError>{errors.phone}</FieldError>}

            <SubHeading>{t.villageLabel}</SubHeading>
            <Input
              value={farmer.village}
              onChange={(e) =>
                setFarmer({ ...farmer, village: e.target.value })
              }
              placeholder={t.enterVillage}
            />
            {errors.village && <FieldError>{errors.village}</FieldError>}

            <SubHeading>{t.districtLabel}</SubHeading>
            <Input
              value={farmer.district}
              onChange={(e) =>
                setFarmer({ ...farmer, district: e.target.value })
              }
              placeholder={t.enterDistrict}
            />
            {errors.district && <FieldError>{errors.district}</FieldError>}

            <Button onClick={handleNext}>{t.continue}</Button>
          </Card>
        </Container>
      </ContentWrapper>
    </Page>
  );
}
