function PlanOptions({ children }) {
  return (
    <ul aria-label="The plan options" className="flex flex-col gap-2">
      {children}
    </ul>
  );
}

export default PlanOptions;
