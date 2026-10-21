import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./components/AppLayout";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import ThankingMessage from "./pages/ThankingMessage";
import FormUntouchedGuard from "./components/FormUntouchedGuard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<FormUntouchedGuard />}>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="personal-info" replace />} />
            <Route path="personal-info" element={<Step1 />} />
            <Route path="plans" element={<Step2 />} />
            <Route path="add-ons" element={<Step3 />} />
            <Route path="summary" element={<Step4 />} />
            <Route path="confirmation" element={<ThankingMessage />} />
            <Route path="*" element={<Navigate to="personal-info" replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
