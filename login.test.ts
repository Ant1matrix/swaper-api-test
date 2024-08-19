import axios from "axios";
require("dotenv").config();
import { expectedResponse } from "./resources/expected.data";
import { DataResponse } from "./resources/data.types";

//Initialising global variables & interfaces

interface DataPost {
  name: string | undefined;
  password: string | undefined;
}

const expectedKeys = Object.keys(expectedResponse) as Array<keyof DataResponse>;

const url: string = 'https://swaper.com/rest/public/login';
const postData: DataPost = {
  name: process.env.USERNAME,
  password: process.env.PASSWORD,
};

//Defining test cases

describe("Swaper API Test", () => {
  it("should login to public REST endpoint", async () => {
    const response = await axios.post(url, postData);
    const data: DataResponse = response.data;

    console.log("Response keys", Object.keys(data));
    console.log("ExpectedKeys", expectedKeys);

    expect(response.status).toBe(200); // Expecting a 200 status code
    expect(Object.keys(data)).toEqual(expectedKeys);
    expect(data).toEqual(expect.objectContaining(expectedResponse));
  });

  it("should expect accountBallance to be 0.0", async () => {
    const response = await axios.post(url, postData);
    const data: DataResponse = response.data;

    expect(data.accountBalance).toBe(0.0);
  });
});
