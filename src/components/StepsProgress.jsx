function StepsProgress({ children }) {
  return (
    <div className="absolute top-0 left-0 h-43 w-full bg-[url(./images/bg-sidebar-mobile.svg)] bg-cover bg-center bg-no-repeat pt-8">
      {children}
    </div>
  );
}

export default StepsProgress;
