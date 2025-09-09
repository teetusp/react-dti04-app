import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Square from "./views/SquareCal";
import CarCal from "./views/CarCal";
import BmrCal from "./views/BmrCal";
import MoneyCal from "./views/MoneyCal";
import NotFound from "./views/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator/squareCal" element={<Square />} />
          <Route path="/calculator/bmrCal" element={<BmrCal />} />
          <Route path="/calculator/carCal" element={<CarCal />} />
          <Route path="/calculator/moneyCal" element={<MoneyCal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

