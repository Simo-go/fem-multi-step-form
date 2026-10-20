import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import FormNavigation from "../components/FormNavigation";
import PeriodSelector from "../components/PeriodSelector";
import PlanOption from "../components/PlanOption";
import PlanOptions from "../components/PlanOptions";
import StepDetails from "../components/StepDetails";
import StepHeader from "../components/StepHeader";
import { useMultiStepFormContext } from "../contexts/MultiStepFormContext";

function Step2() {
  const { register, formState, handleSubmit, control } = useForm({
    defaultValues: {
      plan: "arcade",
      period: true,
    },
  });
  const navigate = useNavigate();
  const { handleIncrementStep } = useMultiStepFormContext();

  function onSubmit() {
    navigate("/add-ons");
    handleIncrementStep();
  }

  return (
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
        <PeriodSelector control={control} {...register("period")} />
      </StepDetails>
      <FormNavigation />
    </form>
  );
}

export default Step2;
