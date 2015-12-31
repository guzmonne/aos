/***********************************************************/
/* IMPORT STYLES                                           */
/***********************************************************/
import './styles/override.styl'
/***********************************************************/
/* IMPORT APP                                              */
/***********************************************************/
import React from 'react'
import Parse from 'parse'
import { render } from 'react-dom'
import routes from './router.js'
/***********************************************************/
/* INITIALIZE PARSE                                        */
/***********************************************************/
Parse.initialize('JFX5XaxaUT3F9NvmgjeeTqsPvKXW0Eap9PSZ5hpM', 'recvEwie6fl4VtZ5K2jPi7r2w4PYlbZWPG6r2Rhc');
/***********************************************************/
/* HOT RELOADING CODE - HACKY                              */
/***********************************************************/
var Router = require('react-router')

var router = Router.createRoutes(routes)[0];

var Root = render(router(), document.getElementById('root'));

if (module.hot){
	module.hot.accept('./router.js', function(){
		_routes = require('./router.js');
		router.replaceRoutes(_routes);
	});

	require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [Root];
    }
  });

}
/***********************************************************/
/* [LOG: Guzman Monne <guzmonne@hotmail.com>]              */
/* I'll keep this just in case                             */
/* 31/12/2015                                              */
/***********************************************************/

//import Router from './router.js'

/*
// Render main app to #root element on index.html
var Root = render(<Router></Router>, document.getElementById('root'));

// React hot loader
if (module.hot) {
	module.hot.accept('./router.js', () => {
		router = require('./router.js');
		router.replaceRoutes()
	})
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function () {
      // Help React Hot Loader figure out the root component instances on the page:
      return [Root];
    }
  });
}
*/