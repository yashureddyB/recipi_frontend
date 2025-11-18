import React from "react";

class Feedback extends React.Component {
  constructor() {
    super();
    this.state = { subject: "", message: "" };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Subject: " + this.state.subject + "\nMessage: " + this.state.message);
    this.setState({ subject: "", message: "" });
  };

  render() {
    return (
      <div className="flex justify-center items-center min-h-[60vh] bg-transparent">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-300 ">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Feedback Form
          </h2>

          <form onSubmit={this.handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                placeholder="Enter subject"
                value={this.state.subject}
                onChange={(e) => this.setState({ subject: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Feedback
              </label>
              <textarea
                placeholder="Write your feedback..."
                value={this.state.message}
                onChange={(e) => this.setState({ message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 rounded-lg transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Feedback;
