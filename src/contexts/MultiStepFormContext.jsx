import { createContext, use, useState } from "react";

const MultiStepFormContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
function MultiStepFormProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <MultiStepFormContext value={{ currentStep }}>
      {children}
    </MultiStepFormContext>
  );
}

function useMultiStepFormContext() {
  const context = use(MultiStepFormContext);

  if (!context)
    throw new Error(
      "Can't use MultiStepFormContext out of MultiStepFormProvider",
    );

  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { MultiStepFormProvider, useMultiStepFormContext };
