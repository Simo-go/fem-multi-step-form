import { Outlet } from "react-router";
import StepBox from "./StepBox";
import StepItem from "./StepItem";
import StepsList from "./StepsList";
import StepsProgress from "./StepsProgress";
import { FORM_STEPS } from "../utils/constants";
import FormNavigation from "./FormNavigation";
import { ViewTransition } from "react";

function MultiStepForm() {
  // const navigate = useNavigate();
  // const { pathname: path } = useLocation();

  // useEffect(function () {
  //   if (path !== "/personal-info") navigate("/personal-info");
  // }, []);

  return (
    <div className="contents max-w-235 rounded-[.625rem] md:flex md:h-150 md:basis-235 md:gap-[clamp(3.625rem,calc(6.25vw+0.625rem),6.25rem)] md:bg-white md:p-4 md:pr-[clamp(3.625rem,calc(6.25vw+0.625rem),6.25rem)] md:shadow-[0_25px_40px_-20px_rgba(0,0,0,0.1)]">
      <StepsProgress>
        <ViewTransition enter="auto" update="auto">
          <StepsList>
            {FORM_STEPS.map(
              (step) =>
                step.step !== 4 && (
                  <StepItem stepNumber={step.step + 1} key={step.step}>
                    {step.name.toUpperCase()}
                  </StepItem>
                ),
            )}
          </StepsList>
        </ViewTransition>
      </StepsProgress>

      <StepBox>
        <ViewTransition enter="auto" update="auto">
          <Outlet />
        </ViewTransition>
        <FormNavigation />
      </StepBox>
    </div>
  );
}

export default MultiStepForm;
