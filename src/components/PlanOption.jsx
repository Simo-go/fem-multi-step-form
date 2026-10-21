import { PLAN_PRICE_MAP_MONTHLY } from "../utils/constants";
import { getPlanPrice } from "../utils/helpers";

function PlanOption({ period, iconPath = "", title = "", ...inputProps }) {
  const planPrice = getPlanPrice(inputProps.id, period);

  return (
    <li className="group">
      <input className="peer sr-only" type="radio" {...inputProps} />
      <label
        htmlFor={inputProps?.id || ""}
        className="flex cursor-pointer items-center gap-4 rounded-lg border border-purple-200 px-4 py-5 transition-colors group-hover:border-purple-600 peer-checked:border-purple-600 peer-checked:bg-blue-50"
      >
        {iconPath && (
          <img src={iconPath} alt="" className="h-10 w-10 shrink-0" />
        )}
        <div>
          <h2 className="text-preset-3-medium text-blue-950">{title}</h2>
          <span className="block text-preset-4 text-grey-500">
            {"$" + planPrice}/{period === "monthly" ? "mo" : "yr"}
          </span>
        </div>
      </label>
    </li>
  );
}

export default PlanOption;
