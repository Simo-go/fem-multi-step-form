import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router";
import {
  navigatedToOtherStep,
  selectCurrentStep,
  selectHighestUnlockedStep,
} from "../store/FormSlice";
import { FORM_STEPS } from "../utils/constants";
import { getPagePath } from "../utils/helpers";

function FormUntouchedGuard() {
  const currentStep = useSelector(selectCurrentStep);
  const highestUnlockedStep = useSelector(selectHighestUnlockedStep);

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pagePreviousSession = getPagePath(currentStep);

  useEffect(function () {
    // if matching page before reload -> just render
    if (pagePreviousSession == pathname) return;

    const stepToVisit = FORM_STEPS.find(
      (step) => step.pathName === pathname,
    )?.step;
    console.log(stepToVisit);

    // if form step has already been visited, navigation allowed
    if (stepToVisit < highestUnlockedStep) {
      dispatch(navigatedToOtherStep(stepToVisit));
      return navigate(pathname);
    }

    // if trying to navigate to a step after the further unlocked step, navigate to that last step
    const lastUnlockedPage = getPagePath(highestUnlockedStep);
    navigate(lastUnlockedPage, { replace: true });
  }, []);

  return <Outlet />;
}

export default FormUntouchedGuard;
