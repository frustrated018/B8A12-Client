const OfferCard = ({ offer }) => {
  return (
    <>
      <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-base-200 max-w-2xl mx-auto ">
        <img
          alt="Trainer"
          src="https://source.unsplash.com/pagoda-surrounded-by-trees-E_eWwM29wfU"
          className="h-32 w-full object-cover md:h-full"
        />

        <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
          <p className="text-sm font-semibold uppercase tracking-widest">
            {offer?.message}
          </p>

          <h2 className="mt-6 font-black uppercase">
            <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
              Get {offer?.offerAmount} % off
            </span>
          </h2>

          <a className="mt-8 inline-block w-full bg-accent py-4 text-sm font-bold uppercase tracking-widest text-white">
            Get Discount
          </a>
        </div>
      </section>
    </>
  );
};

export default OfferCard;
