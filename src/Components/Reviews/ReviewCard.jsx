const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8 bg-accent sm:w-full lg:w-[50%] mx-auto">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {review.userName}
            </h3>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt="user"
              //  Change the image once you add image functions
              src={
                review.userImage
                  ? review.userImage
                  : "https://source.unsplash.com/random/500x500/?headshot"
              }
              className="h-16 w-16 rounded-lg object-fit shadow-sm"
            />
          </div>
        </div>

        <div className=" mt-0 md:-mt-5 ">
          <p className="max-w-[40ch] text-base text-black">{review.review}</p>
        </div>

        <div className="flex flex-col-reverse mt-2">
          <dt className="text-base font-medium text-white">
            {review?.rating}/5
          </dt>
          <dd className="text-xl text-black">Rating</dd>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
