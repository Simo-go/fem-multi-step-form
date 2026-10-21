import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { moveBackClicked, selectCurrentStep } from "../store/FormSlice";
import { getPagePath } from "../utils/helpers";
import NavButton from "./NavButton";

function FormNavigation({ onNext }) {
  const currentStep = useSelector(selectCurrentStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (currentStep === 4) return null;

  const prevPage = getPagePath(currentStep - 1);
  console.log(prevPage);

  function handleClickBack() {
    dispatch(moveBackClicked());
    navigate(prevPage);
  }

  return (
    <div className="opac-90 fixed bottom-0 left-0 flex w-full gap-2 bg-white p-4 opacity-90">
      {currentStep !== 0 && (
        <NavButton onClick={handleClickBack} variation="outline">
          Go Back
        </NavButton>
      )}

      <NavButton
        className="ml-auto"
        variation={currentStep === 3 ? "secondary" : "primary"}
        onClick={onNext}
      >
        {currentStep === 3 ? "Confirm" : "Next Step"}
      </NavButton>
    </div>
  );
}

export default FormNavigation;
