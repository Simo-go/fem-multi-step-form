import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import FormInput from "../components/FormInput";
import StepDetails from "../components/StepDetails";
import StepHeader from "../components/StepHeader";
import {
  personalInfoSubmitted,
  selectCurrentStep,
  selectPersonalInfo,
} from "../store/FormSlice";
import { FORM_STEPS } from "../utils/constants";

const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
const phoneRegex =
  /^(((\+|00)32[ ]?(?:\(0\)[ ]?)?)|0){1}(4(60|[789]\d)\/?(\s?\d{2}\.?){2}(\s?\d{2})|(\d\/?\s?\d{3}|\d{2}\/?\s?\d{2})(\.?\s?\d{2}){2})$/;

function Step1() {
  const currentStep = useSelector(selectCurrentStep);
  const formInfo = useSelector(selectPersonalInfo);

  const { register, handleSubmit, formState } = useForm({
    defaultValues: formInfo,
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errors } = formState;
  const nextPage = FORM_STEPS[currentStep + 1]?.pathName;

  function onSubmit({ name, email, phoneNumber }) {
    if (Object.keys(errors).length) return;

    dispatch(personalInfoSubmitted({ name, email, phoneNumber }));
    if (nextPage) navigate(nextPage);
  }
  console.log(currentStep);

  return (
    <form
      id={FORM_STEPS[currentStep].pathName.slice(1)}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
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
        />
      </StepDetails>
    </form>
  );
}

export default Step1;
