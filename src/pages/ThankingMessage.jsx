import { useNavigate } from "react-router";
import StepHeader from "../components/StepHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset, selectCurrentStep } from "../store/FormSlice";
import { clear } from "redux-localstorage-simple";

function ThankingMessage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentStep = useSelector(selectCurrentStep);

  useEffect(
    function () {
      const timerId = setTimeout(() => {
        console.log("before reset: ", currentStep);

        dispatch(reset());
        clear();
        navigate("/personal-info");
        console.log("before reset: ", currentStep);
      }, 5_000);

      return () => clearTimeout(timerId);
    },
    [navigate, dispatch, currentStep],
  );

  return (
    <div className="flex flex-col items-center justify-center gap-6 sm:gap-8">
      <img src="./images/icon-thank-you.svg" alt="" />
      <StepHeader
        className="mb-0! text-center sm:[&>h1]:mb-4"
        content="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      >
        Thank you!
      </StepHeader>
    </div>
  );
}

export default ThankingMessage;
