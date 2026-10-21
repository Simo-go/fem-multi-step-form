function PlanOptions({ children }) {
  return (
    <ul
      aria-label="The plan options"
      className="flex flex-col gap-2 sm:gap-3 lg:flex-row lg:gap-5"
    >
      {children}
    </ul>
  );
}

export default PlanOptions;
