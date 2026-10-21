import { useDispatch, useSelector } from "react-redux";
import FormNavigation from "../components/FormNavigation";
import StepHeader from "../components/StepHeader";
import Summary from "../components/Summary";
import { getPagePath } from "../utils/helpers";
import { confirmed, nextStep, selectCurrentStep } from "../store/FormSlice";
import { useNavigate } from "react-router";
import { clear } from "redux-localstorage-simple";

function Step4() {
  const currentStep = useSelector(selectCurrentStep);

  const navigate = useNavigate();

  function handleConfirm() {
    navigate("/confirmation");
    clear(); // clearing local storage data
  }

  return (
    <>
      <StepHeader content="Double-check everything looks OK before confirming.">
        Finishing up
      </StepHeader>
      <Summary />
      <FormNavigation onNext={handleConfirm} />
    </>
  );
}

export default Step4;
