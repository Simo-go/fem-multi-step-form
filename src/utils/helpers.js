import {
  ADD_ON_PRICE_MAP_MONTHLY,
  FORM_STEPS,
  YEARLY_DISCOUNT,
} from "./constants";
import { PLAN_PRICE_MAP_MONTHLY } from "./constants";

export function getPrevPagePath(step) {
  // thank you page or doesn't exist
  const prevPage = FORM_STEPS[step - 1];
  const currPage = FORM_STEPS[step];
  if (currPage === "confirmation" || !prevPage) return;

  return prevPage;
}

export function convertMonthlyToYearly(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      Math.ceil(value * 12 - (value * YEARLY_DISCOUNT) / 100),
    ]),
  );
}

export function getPlanPrice(id, period) {
  if (period === "monthly") return PLAN_PRICE_MAP_MONTHLY[id];
  if (period === "yearly")
    return convertMonthlyToYearly(PLAN_PRICE_MAP_MONTHLY)[id];
}

export function getAddonPrice(addOnName, period) {
  if (period === "monthly") return ADD_ON_PRICE_MAP_MONTHLY[addOnName];
  if (period === "yearly")
    return convertMonthlyToYearly(ADD_ON_PRICE_MAP_MONTHLY)[addOnName];
}

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
