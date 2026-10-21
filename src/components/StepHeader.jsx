import clsx from "clsx";

function StepHeader({ children, content = "", className }) {
  return (
    <header className={clsx("mb-6 md:mb-8", className)}>
      <h1 className="mb-2 text-preset-2 text-blue-950 md:text-preset-1">
        {children}
      </h1>
      {content && <p className="text-preset-3 text-grey-500">{content}</p>}
    </header>
  );
}

export default StepHeader;
