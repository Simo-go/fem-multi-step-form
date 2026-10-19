import { useNavigate } from "react-router";
import { useMultiStepFormContext } from "../contexts/MultiStepFormContext";
import { FORM_STEPS } from "../utils/constants";
import FormNavButton from "./FormNavButton";

function FormNavigation({ reset }) {
  const { currentStep, handleDecrementStep } = useMultiStepFormContext();
  const navigate = useNavigate();

  const prevPage = FORM_STEPS[currentStep - 1]?.pathName;
  const nextPage = FORM_STEPS[currentStep + 1]?.pathName;

  function handleClickBack() {
    handleDecrementStep();
    navigate(prevPage);
    reset?.();
  }

  return (
    <div className="opac-90 fixed bottom-0 left-0 flex w-full gap-2 bg-white p-4 opacity-90">
      {prevPage && (
        <FormNavButton onClick={handleClickBack} variation="outline">
          Back
        </FormNavButton>
      )}
      {nextPage && (
        <FormNavButton className="ml-auto" variation="primary">
          Next Step
        </FormNavButton>
      )}
    </div>
  );
}

export default FormNavigation;
