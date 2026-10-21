import { useForm, useWatch } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FormNavigation from "../components/FormNavigation";
import PeriodSelector from "../components/PeriodSelector";
import PlanOption from "../components/PlanOption";
import PlanOptions from "../components/PlanOptions";
import StepDetails from "../components/StepDetails";
import StepHeader from "../components/StepHeader";
import {
  planDetailsSubmitted,
  selectCurrentStep,
  selectPlanDetails,
} from "../store/FormSlice";
import { FORM_STEPS } from "../utils/constants";

function Step2() {
  const planDetails = useSelector(selectPlanDetails);
  const currentStep = useSelector(selectCurrentStep);

  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: planDetails,
  });
  const period = useWatch({ control, name: "period" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit({ plan, period }) {
    navigate("/add-ons");
    dispatch(planDetailsSubmitted({ plan, period }));
  }

  return (
    <>
      <form
        id={FORM_STEPS[currentStep].pathName.slice(1)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <StepHeader content="You have the option of monthly or yearly billing.">
          Select your plan
        </StepHeader>
        <StepDetails>
          <PlanOptions>
            <PlanOption
              period={period}
              iconPath="./images/icon-arcade.svg"
              title="Arcade"
              id="arcade"
              value="arcade"
              {...register("plan")}
            />
            <PlanOption
              period={period}
              iconPath="./images/icon-advanced.svg"
              title="Advanced"
              id="advanced"
              value="advanced"
              {...register("plan")}
            />
            <PlanOption
              period={period}
              iconPath="./images/icon-pro.svg"
              title="Pro"
              id="pro"
              value="pro"
              {...register("plan")}
            />
          </PlanOptions>
          <PeriodSelector period={period} control={control} name="period" />
        </StepDetails>
      </form>
    </>
  );
}

export default Step2;
