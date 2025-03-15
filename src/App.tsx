import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./pages/homepage";
import Product from "./pages/product";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
