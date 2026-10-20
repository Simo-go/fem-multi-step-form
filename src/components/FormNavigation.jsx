import { useNavigate } from "react-router";
import { useMultiStepFormContext } from "../contexts/MultiStepFormContext";
import { FORM_STEPS } from "../utils/constants";
import FormNavButton from "./FormNavButton";
import { useDispatch, useSelector } from "react-redux";
import { prevStep, selectCurrentStep } from "../store/FormSlice";
import { getPrevPagePath } from "../utils/helpers";

function FormNavigation({ reset }) {
  const currentStep = useSelector(selectCurrentStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prevPage = getPrevPagePath(currentStep);
  const nextPage = FORM_STEPS[currentStep + 1]?.pathName;

  function handleClickBack() {
    dispatch(prevStep());
    navigate(prevPage);
    reset?.();
  }

  return (
    <div className="opac-90 fixed bottom-0 left-0 flex w-full gap-2 bg-white p-4 opacity-90">
      {prevPage && (
        <FormNavButton onClick={handleClickBack} variation="outline">
          Go Back
        </FormNavButton>
      )}
      {nextPage && (
        <FormNavButton
          className="ml-auto"
          variation={currentStep === 3 ? "secondary" : "primary"}
        >
          {currentStep === 3 ? "Confirm" : "Next Step"}
        </FormNavButton>
      )}
    </div>
  );
}

export default FormNavigation;
