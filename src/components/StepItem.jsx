import { useMultiStepFormContext } from "../contexts/MultiStepFormContext";
import clsx from "clsx";

function StepItem({ stepNumber = 1, children }) {
  const { currentStep } = useMultiStepFormContext();
  const isActive = stepNumber === currentStep;

  return (
    <li className="flex gap-4">
      <span
        className={clsx(
          "flex size-8.25 shrink-0 items-center justify-center rounded-full border text-preset-4-bold",
          isActive && "border-blue-200 bg-blue-200 text-blue-950",
        )}
      >
        {stepNumber}
      </span>
      <div className="hidden md:block">
        <h2 className="text-preset-5">STEP {stepNumber}</h2>
        <p className="text-preset-4-bold">{children}</p>
      </div>
    </li>
  );
}

export default StepItem;
