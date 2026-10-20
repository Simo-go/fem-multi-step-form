import { FORM_STEPS } from "./constants";

export function getPrevPagePath(step) {
  // thank you page or doesn't exist
  const prevPage = FORM_STEPS[step - 1];
  const currPage = FORM_STEPS[step];
  if (currPage === "confirmation" || !prevPage) return;

  return prevPage;
}
