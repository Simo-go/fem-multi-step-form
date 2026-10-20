import clsx from "clsx";
import Selector from "./Selector";

function PeriodSelector({ period, ...props }) {
  return (
    <div className="flex items-center justify-center gap-6 rounded-lg bg-blue-50 py-3.5">
      <span
        className={clsx(
          `${period === "yearly" ? "text-grey-500" : "text-blue-950"}`,
          "text-preset-4-medium",
        )}
      >
        Monthly
      </span>
      <Selector {...props} />
      <span
        className={clsx(
          `${period === "monthly" ? "text-grey-500" : "text-blue-950"}`,
          "text-preset-4-medium",
        )}
      >
        Yearly
      </span>
    </div>
  );
}

export default PeriodSelector;
