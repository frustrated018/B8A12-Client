import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useParams } from "react-router-dom";

const DashboardProductDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  // Fetching data
  const { data: product = [] } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/products/details/${id}`);
      return res.data;
    },
  });

  return (
    <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 w-[90%] lg:w-[70%] mx-auto my-20 shadow-lg">
      {/* Image */}
      <img
        alt=""
        src={product.image}
        className="h-56 w-full object-cover sm:h-full"
      />
      <div className="p-4">
        {/* All details about product */}
        <div className="flow-root rounded-lg border border-primary bg-secondary py-3 shadow-sm">
          <dl className="-my-3 divide-y divide-primary text-sm">
            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Product Name</dt>
              <dd className="text-gray-700 sm:col-span-2">{name}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Tags</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {product.tags && product.tags.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-accent rounded-lg px-3 py-1 text-sm font-semibold text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span>No tags available</span>
                )}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900">Description</dt>
              <dd className="text-gray-700 sm:col-span-2">
                {product.longDescription}
              </dd>
            </div>

            {/* External Links */}
            {product.externalLinks && product.externalLinks.length > 0 && (
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">External Links</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {product.externalLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary underline"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </dd>
              </div>
            )}

            {/* Product Owner */}
            {product.productOwner && (
              <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Product Owner</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {product.productOwner.name}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default DashboardProductDetails;
