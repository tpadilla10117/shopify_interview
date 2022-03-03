# App Description

- A template created in Node.js for e-commerce sites

## Deployment:
 - N/A

## Tech Stack:

- Node.js, Express.js(API & Webhook), JS, React.js, HTML, SASS / SCSS, Redux, Jest, PostgreSQL 

## Limitations & Future Iterations:

- 

## Directory:
<!-- tree generated by markdown-notes-tree starts here -->

- [**public**](public)
- [**src**](src)
    - [**backend**](src/backend)
        - [**dbadapters**](src/backend/dbadapters)
    - [**frontend**](src/frontend)
        - [**api**](src/frontend/api)
            - [**errors**](src/frontend/api/errors)
        - [**assets**](src/frontend/assets)
            - [**icons**](src/frontend/assets/icons)
            - [**images**](src/frontend/assets/images)
        - [**components**](src/frontend/components)
            - [**layout**](src/frontend/components/layout)
                - [**ctabutton**](src/frontend/components/layout/ctabutton)
                - [**desktopNav**](src/frontend/components/layout/desktopNav)
                - [**directory**](src/frontend/components/layout/directory)
                - [**header**](src/frontend/components/layout/header)
                - [**heroBanner**](src/frontend/components/layout/heroBanner)
                - [**landingLogin**](src/frontend/components/layout/landingLogin)
                - [**login**](src/frontend/components/layout/login)
                - [**logout**](src/frontend/components/layout/logout)
                - [**menuItem**](src/frontend/components/layout/menuItem)
                - [**modal**](src/frontend/components/layout/modal)
                - [**nav**](src/frontend/components/layout/nav)
                - [**productCards**](src/frontend/components/layout/productCards)
                - [**productFeed**](src/frontend/components/layout/productFeed)
                - [**products**](src/frontend/components/layout/products)
                - [**sidebar**](src/frontend/components/layout/sidebar)
                - [**signup**](src/frontend/components/layout/signup)
                - [**signupModal**](src/frontend/components/layout/signupModal)
            - [**pages**](src/frontend/components/pages)
                - [**about**](src/frontend/components/pages/about)
                - [**cart**](src/frontend/components/pages/cart)
                - [**checkoutpg**](src/frontend/components/pages/checkoutpg)
                - [**orderpg**](src/frontend/components/pages/orderpg)
                - [**productspg**](src/frontend/components/pages/productspg)
                - [**signin**](src/frontend/components/pages/signin)
        - [**reduxglobalstore**](src/frontend/reduxglobalstore)
        - [**reduxslices**](src/frontend/reduxslices)
        - [**services**](src/frontend/services)
    - [**jest**](src/jest)
        - [**db_tests**](src/jest/db_tests)

<!-- tree generated by markdown-notes-tree ends here -->


## Integrations, Tools, & Libraries:

### `npm i node-modules`
- (https://www.npmjs.com/package/node-modules)

### `npm i nodemon`
- monitors files and auto restart server when changes made to server

### `npm i cors`

### `npm install axios` 
- promise based HTTP client for browser and node.js

### `npm i pg`
- the database

### `npm i --save-dev jest`
- add jest (JS) testing library to dev dependency for unit tests

### `npm i jsonwebtoken`
- jsonwebtoken

### `npm i morgan`
- logging middleware

### `npm i express`
- for web-server & API

### `npm i bcrypt`
- for pw hashing

### `npm install classnames`

- A simple JavaScript utility for conditionally joining classNames together.
(https://www.npmjs.com/package/classnames)

### `npm i dotenv`

### `npm install react-redux`
- React Redux is the official React UI bindings layer for Redux. It lets your React components read data from a Redux store, and dispatch actions to the store to update state. (https://react-redux.js.org/introduction/getting-started)

### `npm install @reduxjs/toolkit`
- Redux is a predictable state container for JavaScript apps.  It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience. (https://redux.js.org/introduction/getting-started)

### `npm install react-router-dom`

### `npm install react-transition-group`

- Exposes simple components useful for defining entering and exiting transitions. React Transition Group is not an animation library like React-Motion, it does not animate styles by itself. Instead it exposes transition stages, manages classes and group elements and manipulates the DOM in useful ways, making the implementation of actual visual transitions much easier.

### `npm install sass`

- Sass is a stylesheet language that’s compiled to CSS. It allows you to use variables, nested rules, mixins, functions, and more, all with a fully CSS-compatible syntax. Sass helps keep large stylesheets well-organized and makes it easy to share design within and across projects.
(https://sass-lang.com/documentation)

### `npm i emailjs.com`

- Email.js (email server provider library)
-(https://www.emailjs.com/docs/sdk/installation/)

### `npm i react-scroll`

- React component for animating vertical scrolling
- (https://www.npmjs.com/package/react-scroll)

### `npm i react-responsive-carousel`
- for carousel dependency

### `npm install react-currency-format`
- for currency fortmatter dependency
- (https://www.npmjs.com/package/react-currency-format)

### `npm install moment`
- A JavaScript date library for parsing, validating, manipulating, and formatting dates

### `npm install --save stripe` 
- to install the Stripe library

### `npm install @stripe/stripe-js`
- install Stripe.js Module to make server-side requests to to Stripe API and to provide methods for including Stripe.js in client-side code

### `npm install -D markdown-notes-tree`
(https://github.com/mistermicheels/markdown-notes-tree)
- If you have a folder structure with Markdown notes, you can use this tool to generate Markdown trees that act as a table of contents for the folder structure.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Stripe Processes:

After login & authentication, run `stripe listen --forward-to localhost:3000/api/webhook` for local environment -> receive a STRIPE_SIGNING_SECRET and place into environment variable

For payments use: `4242 4242 4242 4242` for card number -> should give a success.