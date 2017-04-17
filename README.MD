### A convenient module that help you transform ES2015+ into ES5

* Most of the source code are copy from [create-react-app](https://github.com/facebookincubator/create-react-app).
* Use [whatwg-fetch](https://github.com/github/fetch) and [promise-polyfill](https://github.com/taylorhakes/promise-polyfill) polyfills.
* Use [fast-async](https://github.com/MatAtBread/fast-async) to transform the ``` async/await ``` feature to ``` Promise ``` chain.
* Currently focus on browser only.

#### Usage
##### Install
```js
yarn add es-start-kit
```
Or if you don't use yarn
```js
npm install es-start-kit --save-dev
```

Currently, you must have an directory ```src``` in the project root and an ```entry.js``` file as the project's entry.

Then you can use the ```es-load``` in your ```package.json``` like
```js
"scripts": {
    "build" : "es-load"
  }
```