/* eslint-disable react-hooks/refs */
import { useController } from "react-hook-form";

function Selector(props) {
  const { field } = useController(props);

  return (
    <input
      type="checkbox"
      onChange={(e) => field.onChange(e.target.checked ? "yearly" : "monthly")}
      onBlur={field.onBlur}
      checked={field.value === "yearly"}
      name={field.name}
      ref={field.ref}
      className="before:content before: after: after:h3 after: relative cursor-pointer appearance-none before:block before:h-5 before:w-10 before:rounded-full before:bg-blue-950 after:absolute after:top-[50%] after:left-1 after:block after:h-3 after:w-3 after:translate-y-[-50%] after:rounded-full after:bg-white after:transition-transform checked:after:translate-x-5"
    />
  );
}

export default Selector;
