function StepBox({ children }) {
  return (
    <div className="relative z-2 mx-4 mt-25 rounded-[10px] bg-white px-6 py-8 shadow-[0_25px_40px_-20px_rgba(0,0,0,0.1)]">
      {children}
    </div>
  );
}

export default StepBox;
