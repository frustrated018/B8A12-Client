const Banner = () => {
  return (
    <>
      <section className="relative bg-[url(https://source.unsplash.com/random/?tech)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-xl text-left">
            {/* text goes here */}
            <h1 className=" text-xl md:text-2xl lg:text-4xl font-bold text-white">
              Explore the Future of Tech with
              <strong className="block font-extrabold text-secondary text-2xl md:text-3xl lg:text-5xl">
                 Tech Trends
              </strong>
            </h1>
            <div className="mt-4 text-white max-w-lg sm:text-lg/relaxed">
              Tech Trends, your gateway to the latest in technology. Discover
              and learn about cutting-edge innovations that shape the future.
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <button className="inline-block rounded bg-primary px-12 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl">
                Get Started
              </button>
              <button className="inline-block rounded bg-accent px-12 py-3 text-base font-medium text-white transition hover:scale-110 hover:shadow-xl">
                learn more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
