function Selector(props) {
  return (
    <input
      type="checkbox"
      {...props}
      className="before:content before: after: after:h3 after: relative cursor-pointer appearance-none before:block before:h-5 before:w-10 before:rounded-full before:bg-blue-950 after:absolute after:top-[50%] after:left-1 after:block after:h-3 after:w-3 after:translate-y-[-50%] after:rounded-full after:bg-white after:transition-transform checked:after:translate-x-5"
      defaultChecked={false}
    />
  );
}

export default Selector;
