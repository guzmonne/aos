import React from 'react'
import { render } from 'react-dom'
import App from './main.js'

// Render main app to #root element on index.html
var Root = render(<App></App>, document.getElementById('root'));

// React hot loader
if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [Root];
    }
  });
}