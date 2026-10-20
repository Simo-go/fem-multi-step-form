import clsx from "clsx";
import { useWatch } from "react-hook-form";
import Selector from "./Selector";

function PeriodSelector({ control, ...props }) {
  const isYearly = useWatch({ control, name: "period" });

  return (
    <div className="flex items-center justify-center gap-6 rounded-lg bg-blue-50 py-3.5">
      <span
        className={clsx(
          `${isYearly ? "text-grey-500" : "text-blue-950"}`,
          "text-preset-4-medium",
        )}
      >
        Monthly
      </span>
      <Selector {...props} />
      <span
        className={clsx(
          `${!isYearly ? "text-grey-500" : "text-blue-950"}`,
          "text-preset-4-medium",
        )}
      >
        Yearly
      </span>
    </div>
  );
}

export default PeriodSelector;
