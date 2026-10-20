import Checkbox from "./Checkbox";

function AddOnOption({ title, caption, ...inputProps }) {
  return (
    <li>
      <label
        htmlFor={inputProps.id}
        className="flex items-center gap-4 rounded-lg border border-purple-200 px-4 py-3 transition-all has-checked:border-purple-600 has-checked:bg-blue-50"
      >
        <Checkbox {...inputProps} />
        <div>
          <h2 className="text-preset-4-medium text-blue-950">{title}</h2>
          <span className="block text-preset-5 text-grey-500">{caption}</span>
        </div>
        <span className="ml-auto text-preset-5 text-purple-600">+$1/mo</span>
      </label>
    </li>
  );
}

export default AddOnOption;
