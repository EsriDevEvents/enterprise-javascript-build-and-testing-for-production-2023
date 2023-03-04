# Enterprise JavaScript: Build and Testing for Production

An example project that demonstrates the principles and practices described in the **Enterprise JavaScript: Build and Testing for Production** talk at the [2023 Esri Dev Summit](https://www.esri.com/en-us/about/events/devsummit/overview)

This project makes use of the following:

- The [Create React App](https://github.com/facebook/create-react-app) set up the basic framework of the web client. It is also used to create a production build of the web code via webpack.
- [Jest](https://jestjs.io/) is the testing framework.
- [Testing Library](https://testing-library.com/) provides some helper functions for testing.
- [ExpressJS](https://expressjs.com/) sets up a simple REST interface.
- [node-config](https://github.com/node-config/node-config) controls the REST interface configuration (i.e. the text that gets returned).

## Slides and recording

Most of the recordings are uploaded to [2023 Esri Developer Summit in "mediaspace.esri.com"](https://mediaspace.esri.com/channel/2023%2BEsri%2BDeveloper%2BSummit/292702072) and slides are made available at [Esri Events > Proceedings](https://www.esri.com/en-us/about/events/index/proceedings).

## Setup

[NodeJS](https://nodejs.org/) is required to run this project. It was developed using v18, but it _may_ work on other versions.

To install the necessary dependencies, run the following at the command prompt:

```
npm install
```

## Running the project

To start up the project, run the following in a command prompt:

```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. It may take a few moments to start up.

### Configuration switching

The project has a "production" mode that demonstrates node-config's hierarchical configuration management. Run the following at the command prompt:

```
npm start:production
```

## Unit testing

Run the project's unit tests by entering the following at the command prompt:

```
npm test
```

This runs the unit tests in interactive watch mode. Enter `a` at the prompt to re-run all the tests. Enter `q` to exit the test runner. See [this section](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building the project

Run the following at a command prompt:

```
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
