import clsx from "clsx";

function SummaryItem({ children, variant, label, price, periodShort }) {
  return (
    <div className="flex items-center gap-2">
      <div className="mr-auto flex flex-col">
        <span
          className={clsx({
            "text-preset-4-medium text-blue-950": variant === "plan",
            "text-preset-4 text-grey-500":
              variant === "addOn" || variant === "total",
          })}
        >
          {label}
        </span>
        {children}
      </div>
      <span
        className={clsx("text-blue-950", {
          "text-preset-4-bold": variant === "plan",
          "text-preset-4": variant === "addOn",
          "text-preset-3-medium font-bold text-purple-600": variant === "total",
        })}
      >
        {variant !== "plan" ? "+" : ""}
        {"$"}
        {price}/{periodShort}
      </span>
    </div>
  );
}

export default SummaryItem;
