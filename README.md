# Mesos dashboard

The project was built using the React eco-system from a seed project I have created while ago, which includes out of the box the tools I have found many benefits like the ones listed below.

React: Is being used because enable developers to rapidly build component based web apps with reusability and isolation in mind. Performance is also a important factor.

Redux: Flux design pattern to organize and share UI states, preferably Redux because of it’s one state tree nature making it easier to scale and maintain long term projects.

React-Router: Easy to use and good community support, so far the most reliable for React eco-system.
Babel: Empower developers to use ES6/7 features where they can take advantages being more productive and building better software using helpful feats not supported or partially supported in browsers in which can be transpiled back to ES5/4.

Wepack: Enable us to use altogether React, Redux, Babel, CSS in a modular system way where can be bundled and distributed. Other reasons to like Webpack are the development friendly environments that can be set, on demand loading based on paths, tree shaking (bundle only what is used), and performance/optimization modules as helpers e.g use React production mode, remove react prop types for production, etc.

SASS/PostCSS: To boost productivity making coding CSS a bit more dynamic where variables can be used, comparability, autoprefixes, etc.

CSS modules: Used to build component based UIs making styles isolated using the class with a defined pattern, avoiding name collision and global styles.

Jest: Starting to explore more. Work “out-of-the-box” with React eco system which makes configuration process much easier to setup and use (doesn’t need hacks like Karma and Webpack together), unfortunately the mock feat from the tool is a pain because of the context webpack require modules.

### Main tools/modules
- React
    - Hot module reload
- Redux
    - Redux-logger
    - Redux-thunk
- React Router
- Babel/ES6/7
- Webpack
    - Webpack dashboard 
- SASS/PostCSS
    - CSS modules 
- Unit tests/Coverage
    - Jest
    - and React/Redux modules for unit testing

### Project Structure

After architecting a couple of React/Redux applications I have found that the structure defined in this repo is the most productive and scalable so far focusing in component based UIs (isolated components) but there is always space for improvements so please let me know your ideas.
```
| src
    | index.html
    | index.js (root route file)
    | shared
        | index.reducer.js
        | index.store.js
        | constants.js
    | featureBla
        | featureBla.actions.js
        | featureBla.container.jsx
        | featureBla.reducer.js
        | featureBla.styles.css
        | test
            | featureBla.actions.test.js
            | featureBla.reducer.test.js
    | core (core UI components)
        | core.css
        | main.component.jsx
        | notFound.component.jsx
        | styles
            | base.css
            | grid.css
|
```

### How to run

Requirements:
    Node 7+ suggested (version 5 at least);

Open terminal and run `npm i` to install all necessary packages.
`npm start` will start the webpack server where will open `localhost:8000` automatically.

To run unit tests `npm test`, to distribution version (which include performance improvements based on production env var) version `npm run `
