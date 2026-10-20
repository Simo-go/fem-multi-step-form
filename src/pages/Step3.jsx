import { useForm } from "react-hook-form";
import AddOnOption from "../components/AddOnOption";
import AddOnOptions from "../components/AddOnOptions";
import FormNavigation from "../components/FormNavigation";
import StepHeader from "../components/StepHeader";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addOnsSubmitted, selectAddOns } from "../store/FormSlice";
import { DevTool } from "@hookform/devtools";

function Step3() {
  const addOns = useSelector(selectAddOns);

  const { register, control, handleSubmit } = useForm({
    defaultValues: { addOns },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function onSubmit(data) {
    navigate("/summary");
    dispatch(addOnsSubmitted(data.addOns));
  }

  return (
    <>
      <form aria-label="pick add-ons" onSubmit={handleSubmit(onSubmit)}>
        <StepHeader content="Add-ons help enhance your gaming experience.">
          Pick add-ons
        </StepHeader>
        <AddOnOptions>
          <AddOnOption
            id="online-service"
            title="Online service"
            caption="Access to multiplayer games"
            value="online-service"
            {...register("addOns")}
          />
          <AddOnOption
            id="larger-storage"
            value="larger-storage"
            title="Larger storage"
            caption="Extra 1TB of cloud save"
            {...register("addOns")}
          />
          <AddOnOption
            id="customizable-profile"
            value="customizable-profile"
            title="Customizable profile"
            caption="Custom theme on your profile"
            {...register("addOns")}
          />
        </AddOnOptions>
        <FormNavigation />
      </form>
      <DevTool control={control} /> {/* set up the dev tool */}
    </>
  );
}

export default Step3;
