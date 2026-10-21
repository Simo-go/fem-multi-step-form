import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { clear } from "redux-localstorage-simple";
import StepHeader from "../components/StepHeader";
import { reset } from "../store/FormSlice";

function ThankingMessage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      const timerId = setTimeout(() => {
        dispatch(reset());
        clear();
        navigate("/personal-info", { replace: true });
      }, 5_000);

      return () => clearTimeout(timerId);
    },
    [navigate, dispatch],
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
