import { useSelector } from "react-redux";
import { useAddOnPrice } from "../hooks/useAddOnPrice";
import { ADD_ON_PRICE_MAP_MONTHLY } from "../utils/constants";
import Checkbox from "./Checkbox";
import { selectPeriod } from "../store/FormSlice";

function AddOnOption({ title, caption, ...inputProps }) {
  const addOnPrice = useAddOnPrice(inputProps.id);
  const period = useSelector(selectPeriod);
  console.log(addOnPrice, period);

  return (
    <li>
      <label
        htmlFor={inputProps.id}
        className="flex cursor-pointer items-center gap-4 rounded-lg border border-purple-200 px-4 py-3 transition-all hover:border-purple-600 has-checked:border-purple-600 has-checked:bg-blue-50 md:px-6 md:py-4.5"
      >
        <Checkbox {...inputProps} />
        <div>
          <h2 className="text-preset-4-medium text-blue-950 md:text-preset-3-medium">
            {title}
          </h2>
          <span className="block text-preset-5 text-grey-500 md:text-preset-4">
            {caption}
          </span>
        </div>
        <span className="ml-auto text-preset-5 text-purple-600 md:text-preset-4">
          +{"$"}
          {addOnPrice}/{period === "monthly" ? "mo" : "yr"}
        </span>
      </label>
    </li>
  );
}

export default AddOnOption;
