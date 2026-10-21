import { Outlet } from "react-router";
import StepBox from "./StepBox";
import StepItem from "./StepItem";
import StepsList from "./StepsList";
import StepsProgress from "./StepsProgress";
import { FORM_STEPS } from "../utils/constants";

function MultiStepForm() {
  // const navigate = useNavigate();
  // const { pathname: path } = useLocation();

  // useEffect(function () {
  //   if (path !== "/personal-info") navigate("/personal-info");
  // }, []);

  return (
    <div className="contents rounded-[.625rem]">
      <StepsProgress>
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
      </StepsProgress>
      <StepBox>
        <Outlet />
      </StepBox>
    </div>
  );
}

export default MultiStepForm;
