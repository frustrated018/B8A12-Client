const Home = () => {
  return (
    <>
      <p>this is teh home compoenet</p>
      <div className="w-full h-[20vh] bg-primary">
        {" "}
        <p className=" text-center pt-10 uppercase text-white text-4xl"> primary</p>
      </div>
      <div className="w-full h-[20vh] bg-secondary">
        <p className=" text-center pt-10 uppercase text-white text-4xl"> secondary</p>
      </div>
      <div className="w-full h-[20vh] bg-accent">
        <p className=" text-center pt-10 uppercase text-white text-4xl"> Accent</p>
      </div>
      <div className="w-full h-[20vh] bg-base-100">
        <p className=" text-center pt-10 uppercase text-white text-4xl"> background</p>
      </div>
      <div className="w-full h-[20vh] bg-neutral">
        <p className=" text-center pt-10 uppercase text-white text-4xl"> Nneutral/text</p>
      </div>
    </>
  );
};

export default Home;
