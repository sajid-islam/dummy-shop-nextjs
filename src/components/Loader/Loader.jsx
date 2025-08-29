const Loader = () => {
  return (
    <div className="flex flex-row gap-2 justify-center items-center h-[calc(100svh-64px)]">
      <div className="w-4 h-4 rounded-full bg-primary-500 animate-bounce [animation-delay:.7s]"></div>
      <div className="w-4 h-4 rounded-full bg-primary-500 animate-bounce [animation-delay:.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-primary-500 animate-bounce [animation-delay:.7s]"></div>
    </div>
  );
};

export default Loader;
