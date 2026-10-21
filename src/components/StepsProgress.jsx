function StepsProgress({ children }) {
  return (
    <div className="md:p- absolute top-0 left-0 h-43 w-full bg-[url(./images/bg-sidebar-mobile.svg)] bg-cover bg-center bg-no-repeat pt-8 md:static md:h-auto md:w-51.5 md:shrink-0 md:rounded-[10px] md:px-6.75 md:pt-10">
      {children}
    </div>
  );
}

export default StepsProgress;
