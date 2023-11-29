import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { TagsInput } from "react-tag-input-component";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [selected, setSelected] = useState(["tech"]);
  const [externalLinks, setExternalLinks] = useState([]);
  const [productData, setProductData] = useState({});
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const params = useParams();

  // Getting data from server and loading them inside the state as default values
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axiosPublic.get(`/products/details/${params.id}`);
        // Set the product data in the state
        setProductData(response.data);
        // Set default values in the form
        setSelected(response.data.tags || ["tech"]);
        setExternalLinks(response.data.externalLinks || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductData();
  }, [axiosPublic, params.id]);

  //   submitting form
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.productName.value;
    const image = form.photoUrl.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const timestamp = new Date().toLocaleDateString();
    const tags = selected;
    const product = {
      name,
      tags,
      image,
      shortDescription,
      longDescription,
      upvoteCount: 0,
      downvoteCount: 0,
      timestamp,
      productOwner: {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
      },
      externalLinks,
    };
    // TODO: Need to send the owner data like user email in here

    await axiosPublic
      .post("/products/add", { product })
      .then((res) => {
        if (res.data.insertedId > 0) {
          // successToast("Product in review")
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your product has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          // successToast("Your product has been submitted for review") [don't know why this hook isn't working]
          // TODO: Fixed the toast issue it should work fine now [Fix it later]
        }
      })
      .catch((error) => {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Can't submit the product",
          showConfirmButton: false,
          timer: 1500,
        });
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <h2 className="text-center text-lg font-bold text-black">
          You can Update your Product&apos;s details here
        </h2>
      </div>
      <form
        className="max-w-md mx-auto mt-8 p-8 bg-white shadow-lg rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="productName" className="block text-gray-600 mb-2">
            Product Name:
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            className="w-full p-2 border rounded"
            defaultValue={productData.name || ""}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-600 mb-2">
            Tags:
          </label>
          <p className="text-xs mb-2">Press enter to add new tags</p>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="tags"
            placeHolder="Enter tags"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="externalLinks" className="block text-gray-600 mb-2">
            External Links:
          </label>
          <p className="text-xs mb-2">Press enter to add new links</p>
          <TagsInput
            value={externalLinks}
            onChange={setExternalLinks}
            name="externalLinks"
            placeHolder="Enter links"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photoUrl" className="block text-gray-600 mb-2">
            Photo URL:
          </label>
          <input
            type="text"
            required
            name="photoUrl"
            className="w-full p-2 border rounded"
            defaultValue={productData.image || ""}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="shortDescription"
            className="block text-gray-600 mb-2"
          >
            Short Description:
          </label>
          <input
            type="text"
            required
            name="shortDescription"
            className="w-full p-2 border rounded"
            defaultValue={productData.shortDescription || ""}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="longDescription" className="block text-gray-600 mb-2">
            Long Description:
          </label>
          <textarea
            required
            name="longDescription"
            className="w-full p-2 border rounded"
            defaultValue={productData.longDescription || ""}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
