function StepsList({ children }) {
  return (
    <ul className="mx-auto flex justify-center gap-4 text-white md:flex-col md:gap-8">
      {children}
    </ul>
  );
}

export default StepsList;
