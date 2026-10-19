import { createContext, useState } from "react";
import StepBox from "./StepBox";
import StepItem from "./StepItem";
import StepsList from "./StepsList";
import StepsProgress from "./StepsProgress";
import { MultiStepFormProvider } from "../contexts/MultiStepFormContext";

function MultiStepForm() {
  return (
    <MultiStepFormProvider>
      <div className="bg-white px-6 py-8">
        <StepsProgress>
          <StepsList>
            <StepItem stepNumber={1}>Your Info</StepItem>
            <StepItem stepNumber={2}>Your Info</StepItem>
            <StepItem stepNumber={3}>Your Info</StepItem>
            <StepItem stepNumber={4}>Your Info</StepItem>
          </StepsList>
        </StepsProgress>
        <StepBox />
      </div>
    </MultiStepFormProvider>
  );
}

export default MultiStepForm;
