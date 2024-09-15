const date = () => {
  const now = new Date();
  now.setDate(now.getDate() + 1);
  return now.toISOString().slice(0, 10).replace(/-/g, "").slice(0, 8);
};

const handleRequest = async (request) => {
  try {
    const response = await request();
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error(
        "Response error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      console.error("Error in the request:", error.request);
    } else {
      console.error("Unknown error:", error.message);
    }
    throw error;
  }
};

module.exports = {
  date,
  handleRequest,
};
