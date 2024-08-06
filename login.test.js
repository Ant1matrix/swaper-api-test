const axios = require("axios");

describe("API Tests", () => {
  it("should return data for a POST request", async () => {
    const url = "https://swaper.com/rest/public/login";
    const data = {
      name: "testuser@qa.com",
      password: "Parole123",
    };

    try {
      const response = await axios.post(url, data);
      console.log("Response data:", response.data);

      expect(response.status).toBe(200);
      expect(response.data["username"]).toBe("testuser@qa.com");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response:", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
    }
  });
});
