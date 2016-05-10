# angular-react-examples
- Simple examples of [Angular](https://github.com/angular/angular.js) and [React](https://github.com/facebook/react) using [ngReact](https://github.com/ngReact/ngReact).
- Not only angular, react and ngReact, this example contains other utilities(for now, requirejs and webpack) to easily build your SPA(Single Page Application). Using these utilities, you don't have to insert ```<script></script>``` tags for every single js and stylesheets. Only one script tag will build your SPA.
- I hope that this examples are useful for developers who want to use both angular 1 and react and don't know how to combine them.
- If your are not familiar with React, refer to Related Tutorial below

## Example Following Steps
###- RequireJS
This example uses [RequireJS](https://github.com/requirejs/requirejs) to load dependencies and each components. However, requirejs cannot load css files by itself, so I added [require-css](https://github.com/guybedford/require-css) to load css files using requirejs. You can see how css files are loaded in require-css in ```requirejs/src/js/main.js```. I also commented brief explanation of requirejs. For more information about requirejs or require-css, please refer to their own documents.
 - ```git clone https://github.com/kimxogus/angular-react-examples.git```
 - ```cd requirejs```
 - ```npm install -g gulp```
 - ```npm install```
 - ```gulp build```
 - open ```path/to/your/project/requirejs/dist/index.html``` in your web brower
 
###- Webpack
This example uses [Webpack](https://github.com/webpack/webpack) to integrate all the libraries and components into single js file. Babel, babel presets for es2015 & react and css & style loaders are also used in this example. Using webpack, you can build web SPA like nodejs application. For now, this example is not written in es6. I'll upload another example written in es6 as soon as I make. (or you can make a pull request :) )
 - ```git clone https://github.com/kimxogus/angular-react-examples.git```
 - ```cd webpack```
 - ```npm install -g gulp webpack```
 - ```npm install```
 - ```gulp build```
 - open ```path/to/your/project/webpack/dist/index.html``` in your web browser

## Related Tutorial
 - [React tutorial for web beginners](https://github.com/kimxogus/react-tutorial)
  - This tutorial covers from html, javascript basics to React details and React compiliation using webpack and babel.

## License
MIT
