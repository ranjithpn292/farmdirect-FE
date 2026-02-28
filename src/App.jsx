import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSelect from "./pages/LanguageSelect";
import Home from "./pages/Home";
import AddStock from "./pages/AddStock";
import FarmerDetails from "./pages/FarmerDetails";
import ThankYou from "./pages/Thakyou";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LanguageSelect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-stock" element={<AddStock />} />
          <Route path="/farmer-details" element={<FarmerDetails />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
