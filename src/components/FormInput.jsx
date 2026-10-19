import clsx from "clsx";
import InputError from "./InputError";

function FormInput({ label, error = "", ...inputProps }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between gap-2">
        <label htmlFor={inputProps.id}>{label}</label>
        {error && <InputError>{error}</InputError>}
      </div>
      <input
        className={clsx(
          "appearance-none rounded-sm border border-purple-200 px-4 py-3 text-preset-4-medium text-blue-950 outline-none placeholder:text-grey-500 autofill:[-webkit-text-fill-color:var(--color-blue-950)] focus:border-purple-600",
          error && "border-red-500 focus:border-red-500",
        )}
        {...inputProps}
      />
    </div>
  );
}

export default FormInput;
