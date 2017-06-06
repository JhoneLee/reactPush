/*
* @Author: liyunjiao
* @Date:   2017-06-06 13:49:31
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-06 15:27:22
*/

import express from 'express';
import React from 'react';
import ReactDom from 'react-dom/server';
import App from './App.js';
let app = express();
app.use(express.static('build'));
app.set('views','./template');
app.set('view engine','jade');
let html = ReactDom.renderToString(React.createFactory(App)())
app.get('/',(req,res)=>{
    res.render('index',{react:html});
});

app.listen(3000,()=>{
    console.log('open on 3000');
});
