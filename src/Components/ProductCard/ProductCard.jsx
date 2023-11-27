import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

// TODO: Make the name of the product the view details button and add the up and downvote button at the bottom
// add report buton either here or pooduct details page

const ProductCard = ({ product }) => {
  const { name, image, tags, upvoteCount, downvoteCount, shortDescription } =
    product;
  return (
    <>
      <section className="relative block overflow-hidden">
        <div className="absolute end-4 top-4 z-10 space-y-1">
          {/* Upvote Button */}
          <div className="bg-secondary p-1 ">
            <GoTriangleUp size={20} />
            {/* vote count */}
            <p className="text-xs text-center">{upvoteCount}</p>
          </div>
          {/* Down vote button */}
          <div className="bg-secondary p-1">
            {/* vote count */}
            <p className="text-xs text-center">{downvoteCount}</p>
            <GoTriangleDown size={20} />
          </div>
        </div>

        <img
          src={image}
          alt={`Picture of ${name}`}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        {/* text  */}
        <div className="relative border border-gray-100 bg-secondary p-6">
          {/* Tags */}
          {/* TODO: Fix the width of this container to fix the responsive issue */}
          <div className="flex flex-wrap gap-1 w-[300px]">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-accent px-3 py-1.5 text-xs font-medium uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* Product name */}
          <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
          {/* some sort of description */}
          <p className="mt-1.5 text-sm text-gray-700">{shortDescription}</p>

          <form className="mt-4">
            <button className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105">
              View Details
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
