import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const ProductCard = () => {
  return (
    <>
      <a href="#" className="group relative block overflow-hidden">
        <div className="absolute end-4 top-4 z-10 space-y-1">
          {/* Upvote Button */}
          <div className="bg-secondary p-1 ">
            <GoTriangleUp size={20} />
            {/* vote count */}
            <p className="text-xs">200</p>
          </div>
          {/* Down vote button */}
          <div className="bg-secondary p-1">
            {/* vote count */}
            <p className="text-xs">200</p>
            <GoTriangleDown size={20} />
          </div>
        </div>

        <img
          src="https://source.unsplash.com/silver-iphone-6-on-white-table-OxvlDO8RwKg"
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
        />

        {/* text  */}
        <div className="relative border border-gray-100 bg-secondary p-6">
          {/* Tags */}
          {/* TODO: Fix the width of this container to fix the responsive issue */}
          <div className="flex flex-wrap gap-1 w-[300px]">
            <span className=" bg-accent px-3 py-1.5 text-xs font-medium">
              New
            </span>
            <span className=" bg-accent px-3 py-1.5 text-xs font-medium">
              nothing new
            </span>
            <span className=" bg-accent px-3 py-1.5 text-xs font-medium">
              somehthing new
            </span>
            <span className=" bg-accent px-3 py-1.5 text-xs font-medium">
              mabybe
            </span>
            <span className=" bg-accent px-3 py-1.5 text-xs font-medium">
              ahh
            </span>
          </div>
          {/* Product name */}
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            iphone-13 SE
          </h3>
          {/* some sort of description */}
          <p className="mt-1.5 text-sm text-gray-700">
            Some sort of Description
          </p>

          <form className="mt-4">
            <button className="block w-full rounded bg-primary text-white p-4 text-sm font-medium transition hover:scale-105">
              View Details
            </button>
          </form>
        </div>
      </a>
    </>
  );
};

export default ProductCard;
