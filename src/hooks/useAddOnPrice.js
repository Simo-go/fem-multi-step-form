import { useSelector } from "react-redux";
import { selectPeriod } from "../store/FormSlice";
import { ADD_ON_PRICE_MAP_MONTHLY } from "../utils/constants";
import { convertMonthlyToYearly } from "../utils/helpers";

export function useAddOnPrice(id) {
  const period = useSelector(selectPeriod);

  if (period === "monthly") return ADD_ON_PRICE_MAP_MONTHLY[id];
  if (period === "yearly")
    return convertMonthlyToYearly(ADD_ON_PRICE_MAP_MONTHLY)[id];
}
