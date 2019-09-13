import axios from "axios";

const saveRequest = async (title, category, details, budget, timeframe, image) => {
  try {
    let response = await axios.post(
      "http://localhost:3000/api/service_request",
      {
        title: title,
        category: category,
        details: details,
        budget: budget,
        timeframe: timeframe,
        image: image
      }
    );
    return response;
  } catch (error) {
    return error.response;
  }
};

export { saveRequest };
