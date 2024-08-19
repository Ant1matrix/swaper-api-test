import axios from "axios";
require("dotenv").config();
import { expectedResponse } from "./resources/expected.data";
import { DataResponse, DataPost } from "./resources/data.types";

const SWAPER_URL: string = "https://swaper.com/";

const user = {
  USERNAME: process.env.USERNAME ?? process.exit(),
  PASSWORD: process.env.PASSWORD ?? process.exit(),
};
//Initialising global variables & interfaces

const expectedKeys = Object.keys(expectedResponse) as Array<keyof DataResponse>;

//Defining test cases

describe("Swaper API Test", () => {
  const { USERNAME, PASSWORD } = user;

  const userLoginData: DataPost = {
    name: USERNAME,
    password: PASSWORD,
  };

  //Creating axios instance
  const axiosInit = axios.create({ baseURL: SWAPER_URL });

  it("should login to public REST endpoint and check that accountBalance is 0.0", async () => {
    const response = await axiosInit.post("rest/public/login", userLoginData);
    const data: DataResponse = response.data;

    expect(response.status).toBe(200);
    expect(Object.keys(data)).toEqual(expectedKeys);
    expect(data.accountBalance).toBe(0.0);
  });

  it("should throw error when logging in with wrong credentials", async () => {
    let result;
    const invalidUserData: DataPost = {
      name: "UserInv",
      password: "PassInv",
    };

    try {
      await axiosInit.post("rest/public/login", invalidUserData);
    } catch (response) {
      result = response;
      console.log("Error appears as expected:", result.message)
    }
     expect(result.message).toBe("Request failed with status code 400");
  });
});
