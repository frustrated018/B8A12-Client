import { useState } from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    productId,
    name,
    image,
    tags,
    upvoteCount,
    downvoteCount,
    shortDescription,
  } = product;

  // Showing more or less tags

  const [showAllTags, setShowAllTags] = useState(false);
  const displayedTags = showAllTags ? tags : tags.slice(0, 3);

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags);
  };

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
          <div className="flex flex-wrap gap-1 mb-4">
            {displayedTags.map((tag, index) => (
              <span
                key={index}
                className="bg-accent px-3 py-1.5 text-xs font-medium uppercase"
              >
                {tag}
              </span>
            ))}
            {tags.length > 3 && (
              <button
                className="text-primary text-xs font-medium"
                onClick={toggleShowAllTags}
              >
                {showAllTags ? "Show Less" : "Show More"}
              </button>
            )}
          </div>
          {/* Product name */}
          <h3 className="mt-4 text-lg font-medium text-gray-900">{name}</h3>
          {/* some sort of description */}
          <p className="mt-1.5 text-sm text-gray-700 overflow-hidden overflow-ellipsis whitespace-nowrap">
            {shortDescription}
          </p>
          {/* TODO: Change productId to _id when you get the server up and running */}
          <Link to={`details/${productId}`}>
            <button className="block w-full rounded bg-primary text-white p-4 mt-5 text-base font-medium transition hover:scale-105">
              View Details
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ProductCard;
