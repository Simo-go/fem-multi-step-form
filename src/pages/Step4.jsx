import { useDispatch, useSelector } from "react-redux";
import FormNavigation from "../components/FormNavigation";
import StepHeader from "../components/StepHeader";
import Summary from "../components/Summary";
import { getPagePath } from "../utils/helpers";
import { nextStep, selectCurrentStep } from "../store/FormSlice";
import { useNavigate } from "react-router";

function Step4() {
  const currentStep = useSelector(selectCurrentStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleConfirm() {
    navigate("/confirmation");
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
