import clsx from "clsx";
import { useLocation } from "react-router";
import { FORM_STEPS } from "../utils/constants";
import { useSelector } from "react-redux";
import { selectCurrentStep } from "../store/FormSlice";

function StepItem({ stepNumber = 1, children }) {
  const { pathname } = useLocation();
  const activeStep = FORM_STEPS.find(
    (step) => step.pathName === pathname,
  )?.step;
  const currentStep = useSelector(selectCurrentStep);

  const isActive = stepNumber === activeStep + 1 || currentStep === 4;

  return (
    <li className="flex gap-4">
      <span
        className={clsx(
          "flex size-8.25 shrink-0 items-center justify-center rounded-full border-2 text-preset-4-bold",
          isActive && "border-blue-200 bg-blue-200 text-blue-950",
        )}
      >
        {stepNumber}
      </span>
      <div className="hidden md:block">
        <h2 className="text-preset-5 text-blue-300">STEP {stepNumber}</h2>
        <p className="text-preset-4-bold">{children}</p>
      </div>
    </li>
  );
}

export default StepItem;
