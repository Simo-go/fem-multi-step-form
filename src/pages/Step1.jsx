import { useForm } from "react-hook-form";
import StepHeader from "../components/StepHeader";
import FormInput from "../components/FormInput";
import StepDetails from "../components/StepDetails";
import FormNavigation from "../components/FormNavigation";
import { useMultiStepFormContext } from "../contexts/MultiStepFormContext";
import { useNavigate } from "react-router";
import { FORM_STEPS } from "../utils/constants";

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
const phoneRegex =
  /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;

function Step1() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const { currentStep, handleIncrementStep } = useMultiStepFormContext();
  const navigate = useNavigate();

  const nextPage = FORM_STEPS[currentStep + 1]?.pathName;

  function onSubmit() {
    if (Object.keys(errors).length) return;

    handleIncrementStep();
    if (nextPage) navigate(nextPage);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <StepHeader content="Please provide your name, email address, and phone number.">
        Personal info
      </StepHeader>
      <StepDetails>
        <FormInput
          label="Name"
          id="name"
          type="text"
          {...register("name", {
            required: {
              value: true,
              message: "This field is required",
            },
            minLength: {
              value: 6,
              message: "Password should be minimum 6 characters",
            },
            maxLength: {
              value: 30,
              message: "Password should be at most 30 characters",
            },
          })}
          placeholder="e.g. Stephen King"
          error={errors?.name?.message}
          defaultValue="testing out"
        />
        <FormInput
          label="Email Address"
          id="email"
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: emailRegex,
              message: "Invalid email address",
            },
          })}
          placeholder="e.g. stephenking@lorem.com"
          error={errors?.email?.message}
          defaultValue="simeon@gmail.com"
        />
        <FormInput
          label="Phone Number"
          id="phone-number"
          type="tel"
          {...register("phoneNumber", {
            required: {
              value: true,
              message: "This field is required",
            },
            pattern: {
              value: phoneRegex,
              message: "Invalid Belgian phone number",
            },
          })}
          placeholder="e.g. +32 488 61 75 50"
          error={errors?.phoneNumber?.message}
          defaultValue="+32488617550"
        />
      </StepDetails>
      <FormNavigation />
    </form>
  );
}

export default Step1;
