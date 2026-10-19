import clsx from "clsx";

function FormNavButton({ className, variation, children, ...props }) {
  const variations = {
    primary:
      "rounded-sm bg-blue-950 text-preset-3-medium text-white px-4 py-[0.625rem] outline-blue-950 focus-visible:outline-3 focus-visible:outline-offset-2 hover:bg-blue-700",
    outline: "text-preset-3-medium text-grey-500",
  };

  return (
    <button
      {...props}
      className={clsx(
        "cursor-pointer transition-all",
        className,
        variations[variation],
        "",
      )}
    >
      {children}
    </button>
  );
}

export default FormNavButton;
