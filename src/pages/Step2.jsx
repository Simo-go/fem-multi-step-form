import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import FormNavigation from "../components/FormNavigation";
import PeriodSelector from "../components/PeriodSelector";
import PlanOption from "../components/PlanOption";
import PlanOptions from "../components/PlanOptions";
import StepDetails from "../components/StepDetails";
import StepHeader from "../components/StepHeader";
import { useMultiStepFormContext } from "../contexts/MultiStepFormContext";
import { useDispatch, useSelector } from "react-redux";
import {
  nextStep,
  planDetailsSubmitted,
  selectPlanDetails,
} from "../store/FormSlice";
import { DevTool } from "@hookform/devtools";

function Step2() {
  const planDetails = useSelector(selectPlanDetails);
  const { register, handleSubmit, control, getValues } = useForm({
    defaultValues: planDetails,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit({ plan, period }) {
    navigate("/add-ons");
    dispatch(planDetailsSubmitted({ plan, period }));
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepHeader content="You have the option of monthly or yearly billing.">
          Select your plan
        </StepHeader>
        <StepDetails>
          <PlanOptions>
            <PlanOption
              iconPath="./images/icon-arcade.svg"
              price={9}
              title="Arcade"
              id="arcade"
              value="arcade"
              {...register("plan")}
            />
            <PlanOption
              iconPath="./images/icon-advanced.svg"
              price={12}
              title="Advanced"
              id="advanced"
              value="advanced"
              {...register("plan")}
            />
            <PlanOption
              iconPath="./images/icon-pro.svg"
              price={15}
              title="Pro"
              id="pro"
              value="pro"
              {...register("plan")}
            />
          </PlanOptions>
          <PeriodSelector control={control} name="period" />
        </StepDetails>
        <FormNavigation />
      </form>
    </>
  );
}

export default Step2;
