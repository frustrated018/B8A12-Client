import { useState } from "react";
import { TagsInput } from "react-tag-input-component";

const AddProductPlainHTML = () => {
  const [selected, setSelected] = useState(["tech"]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.productName.value;
    const image = form.photoUrl.value;
    const shortDescription = form.shortDescription.value;
    const longDescription = form.longDescription.value;
    const timestamp = new Date().toLocaleDateString();
    const tags = selected;
    const product = { name, tags, image, shortDescription, longDescription, upvotecount:0, downvotecount:0, timestamp};
    console.log("Form values:", product);
  };

  return (
    <>
      <div>
        <h2 className="text-center text-lg font-bold text-black">
          You can submit products. Our modarators will review and and add them
          to the site
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
          />
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-600 mb-2">
            Tags:
          </label>
          <pre>{JSON.stringify(selected)}</pre>
          <TagsInput
            value={selected}
            onChange={setSelected}
            name="tags"
            placeHolder="Enter tags"
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
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddProductPlainHTML;
