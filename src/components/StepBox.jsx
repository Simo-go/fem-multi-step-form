import { Outlet } from "react-router";
import FormNavigation from "./FormNavigation";

function StepBox() {
  return (
    <div>
      <h1>Finishing up</h1>
      <Outlet />
      <FormNavigation />
    </div>
  );
}

export default StepBox;
