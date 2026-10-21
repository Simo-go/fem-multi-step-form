function StepsProgress({ children }) {
  return (
    <div className="md:p- absolute top-0 left-0 h-43 w-full bg-[url(./images/bg-sidebar-mobile.svg)] bg-cover bg-center bg-no-repeat pt-8 md:static md:h-auto md:w-auto md:max-w-68.5 md:flex-1 md:rounded-[10px] md:px-6.75 md:pt-10">
      {children}
    </div>
  );
}

export default StepsProgress;
