import { useSelector } from "react-redux";
import { selectPeriod } from "../store/FormSlice";
import { getAddonPrice } from "../utils/helpers";

export function useAddOnPrice(addOnName) {
  const period = useSelector(selectPeriod);

  return getAddonPrice(addOnName, period);
}
