# Environment setup and Test scenario execution

## Environment setup
1. Please make sure to have Node version 20.10 or higher installed on your local machine. For installation guide, please follow the instructions provided on the official [**Nodejs.org**](https://nodejs.org/en/download/package-manager) website.
2. Clone this repository by running `git clone https://github.com/Ant1matrix/swaper-api-test`.
3. Intall all dependencies by running `npm install`. Those include:
- **Axios**, which is a a promise-based HTTP Client for node.js and the browser. It will be used for API requests and responses. Full documentation can be found [**here**](https://axios-http.com/docs/intro).
- The test framework used for this project is **JEST**. Full documentation on the framework can be accessed [**here**](https://jestjs.io/docs/getting-started#using-typescript). As this project utilizes TypeScript for strict type assertion, follow **Using TypeScript** chapter on [**Getting Started Page**](https://jestjs.io/docs/getting-started#using-typescript) to see how support of typescript is defined for this project.
- **dotenv** module if you would like to load environment variables straight from .env file (optional).

## Test scenario execution
To execute test scenario, run `USERNAME=*username* PASSWORD=*password* npm test` in your command line, where instead of `*username*` and `*password*` please provide apropriate credentials for the API request. 