function Checkbox({ ...inputProps }) {
  return (
    <div className="flex items-center justify-center gap-4 before:block before:size-5 before:rounded-sm before:border before:border-purple-200 before:transition-colors has-checked:before:bg-purple-600 has-checked:before:bg-[url(./images/icon-checkmark.svg)] has-checked:before:bg-center has-checked:before:bg-no-repeat">
      <input type="checkbox" className="sr-only" {...inputProps} />
    </div>
  );
}

export default Checkbox;
