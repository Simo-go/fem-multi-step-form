import { ViewTransition } from "react";
import MultiStepForm from "./MultiStepForm";

function AppLayout() {
  return (
    <ViewTransition enter="auto" update="auto">
      <div className="flow-root min-h-dvh bg-blue-100 pb-24 md:flex md:items-center md:justify-center md:px-10 md:pb-0">
        <MultiStepForm />
      </div>
    </ViewTransition>
  );
}

export default AppLayout;
