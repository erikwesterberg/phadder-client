import axios from "axios";

const saveRequest = async (title, category, details, budget, timeframe) => {
  try {
    let response = await axios.post(
      "http://localhost:3000/api/service_request",
      {
        title: title,
        category: category,
        details: details,
        budget: budget,
        timeframe: timeframe
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export { saveRequest };
