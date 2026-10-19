import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Step1 from "./components/Step1";
import ThankingMessage from "./components/ThankingMessage";
import Step4 from "./components/Step4";
import Step3 from "./components/Step3";
import Step2 from "./components/Step2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate to="personal-info" replace />} />
          <Route path="personal-info" element={<Step1 />} />
          <Route path="plan" element={<Step2 />} />
          <Route path="add-ons" element={<Step3 />} />
          <Route path="summary" element={<Step4 />} />
          <Route path="confirmation" element={<ThankingMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
