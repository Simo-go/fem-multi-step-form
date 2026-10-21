import { ViewTransition } from "react";
import MultiStepForm from "./MultiStepForm";

function AppLayout() {
  return (
    <ViewTransition enter="auto">
      <div className="flow-root min-h-dvh bg-blue-100 pb-24">
        <MultiStepForm />
      </div>
    </ViewTransition>
  );
}

export default AppLayout;
