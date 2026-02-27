import { BrowserRouter, Routes, Route } from "react-router-dom";
import LanguageSelect from "./pages/LanguageSelect";
import Home from "./pages/Home";
import AddStock from "./pages/AddStock";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageSelect />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-stock" element={<AddStock />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;