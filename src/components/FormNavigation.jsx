import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { moveBackClicked, selectCurrentStep } from "../store/FormSlice";
import { getPagePath } from "../utils/helpers";
import NavButton from "./NavButton";
import { FORM_STEPS } from "../utils/constants";
import { clear } from "redux-localstorage-simple";

function FormNavigation() {
  const currentStep = useSelector(selectCurrentStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prevPage = getPagePath(currentStep - 1);
  console.log(prevPage);

  function handleClickBack() {
    dispatch(moveBackClicked());
    navigate(prevPage);
  }

  function handleConfirm() {
    if (currentStep !== 3) return;
    navigate("/confirmation");
    clear(); // clearing local storage data
  }

  return (
    <div className="opac-90 fixed bottom-0 left-0 flex w-full gap-2 bg-white p-4 opacity-90 md:static md:shrink-0 md:p-0">
      {currentStep !== 0 && (
        <NavButton onClick={handleClickBack} variation="outline" type="button">
          Go Back
        </NavButton>
      )}

      <NavButton
        form={currentStep !== 3 && FORM_STEPS[currentStep].pathName.slice(1)}
        className="ml-auto"
        variation={currentStep === 3 ? "secondary" : "primary"}
        onClick={handleConfirm}
      >
        {currentStep === 3 ? "Confirm" : "Next Step"}
      </NavButton>
    </div>
  );
}

export default FormNavigation;
