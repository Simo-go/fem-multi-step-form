import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { planChangeClicked, selectSummaryInfo } from "../store/FormSlice";
import { capitalize, getAddonPrice, getPlanPrice } from "../utils/helpers";
import SummaryItem from "./SummaryItem";
import FormNavigation from "./FormNavigation";

function Summary() {
  const summaryInfo = useSelector(selectSummaryInfo);

  const dispatch = useDispatch();

  const { plan, period, addOns } = summaryInfo;
  const periodShort = period === "monthly" ? "mo" : "yr";
  const planPrice = getPlanPrice(plan, period);
  const addOnPrices = addOns.map((addOn) => getAddonPrice(addOn, period));
  const hasAddOns = addOns.length !== 0;
  const totalPrice =
    planPrice + addOnPrices.reduce((sum, price) => sum + price, 0);

  function handlePlanChangeClick() {
    dispatch(planChangeClicked());
  }

  return (
    <div aria-label="summary">
      <ul className="mb-6 flex flex-col gap-4 rounded-lg bg-blue-50 p-4">
        <li>
          <SummaryItem
            variant="plan"
            label={`${capitalize(plan)} (${capitalize(period)})`}
            price={planPrice}
            periodShort={periodShort}
          >
            <Link
              className="text-preset-4 text-grey-500"
              to="/plans"
              onClick={handlePlanChangeClick}
            >
              Change
            </Link>
          </SummaryItem>
        </li>
        {hasAddOns && (
          <>
            <hr className="border-t border-t-grey-500 opacity-20" />
            {addOns.map((addOn, idx) => (
              <li key={addOn}>
                <SummaryItem
                  variant="addOn"
                  label={capitalize(addOn.replace("-", " "))}
                  price={addOnPrices[idx]}
                  periodShort={periodShort}
                />
              </li>
            ))}
          </>
        )}
      </ul>
      <div className="px-4">
        <SummaryItem
          variant="total"
          label={`Total (${period})`}
          price={totalPrice}
          periodShort={periodShort}
        />
      </div>
      <FormNavigation />
    </div>
  );
}

export default Summary;
