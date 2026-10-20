import { useForm } from "react-hook-form";
import AddOnOption from "../components/AddOnOption";
import AddOnOptions from "../components/AddOnOptions";
import FormNavigation from "../components/FormNavigation";
import StepHeader from "../components/StepHeader";

function Step3() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form aria-label="pick add-ons" onSubmit={handleSubmit(onSubmit)}>
      <StepHeader content="Add-ons help enhance your gaming experience.">
        Pick add-ons
      </StepHeader>
      <AddOnOptions>
        <AddOnOption
          id="online-service"
          title="Online service"
          caption="Access to multiplayer games"
          {...register("add-ons")}
        />
        <AddOnOption
          id="larger-storage"
          title="Larger storage"
          caption="Extra 1TB of cloud save"
          {...register("add-ons")}
        />
        <AddOnOption
          id="customizable-profile"
          title="Customizable profile"
          caption="Custom theme on your profile"
          {...register("add-ons")}
        />
      </AddOnOptions>
      <FormNavigation />
    </form>
  );
}

export default Step3;
