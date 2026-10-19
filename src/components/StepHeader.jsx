function StepHeader({ children, content = "" }) {
  return (
    <header className="mb-6">
      <h1 className="mb-2 text-preset-2 text-blue-950">{children}</h1>
      {content && <p className="text-preset-3 text-grey-500">{content}</p>}
    </header>
  );
}

export default StepHeader;
