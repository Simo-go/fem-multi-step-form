function StepBox({ children }) {
  return (
    <div className="relative z-2 mx-4 mt-25 rounded-[10px] bg-white px-6 py-8 shadow-[0_25px_40px_-20px_rgba(0,0,0,0.1)] sm:mx-8 md:m-0 md:mt-6.75 md:mb-4 md:flex md:flex-1 md:flex-col md:gap-20 md:bg-transparent md:p-0 md:shadow-none">
      {children}
    </div>
  );
}

export default StepBox;
