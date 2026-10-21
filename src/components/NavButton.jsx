import clsx from "clsx";

function NavButton({ className, variation, children, ...props }) {
  const variations = {
    primary: "bg-blue-950 text-white px-4  outline-blue-950 hover:bg-blue-700",
    outline: "text-grey-500 hover:text-blue-950",
    secondary:
      "bg-purple-600 text-white px-8 outline-purple-600 hover:bg-purple-400",
  };

  return (
    <button
      {...props}
      className={clsx(
        "cursor-pointer rounded-sm px-4 py-2.5 text-preset-3-medium transition-all focus-visible:outline-3 focus-visible:outline-offset-2 md:py-3.5 md:text-preset-3-medium",
        className,
        variations[variation],
      )}
    >
      {children}
    </button>
  );
}

export default NavButton;
