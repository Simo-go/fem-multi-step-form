import { Outlet } from "react-router";
import StepBox from "./StepBox";
import StepItem from "./StepItem";
import StepsList from "./StepsList";
import StepsProgress from "./StepsProgress";

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
          <StepItem stepNumber={1}>Your Info</StepItem>
          <StepItem stepNumber={2}>Your Info</StepItem>
          <StepItem stepNumber={3}>Your Info</StepItem>
          <StepItem stepNumber={4}>Your Info</StepItem>
        </StepsList>
      </StepsProgress>
      <StepBox>
        <Outlet />
      </StepBox>
    </div>
  );
}

export default MultiStepForm;
