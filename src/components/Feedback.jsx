import React from "react";

const Feedback = () => {
  return (
    <div className=" w-full  flex items-left justify-center ">
      <div className="w-full  rounded-2xl p-8 w-full max-w-5xl">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Feedback Form
        </h2>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Subject
            </label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something..."
              className="w-full w-4/5 h-40 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
