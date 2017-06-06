/*
* @Author: liyunjiao
* @Date:   2017-06-06 12:27:36
* @Last Modified by:   liyunjiao
* @Last Modified time: 2017-06-06 15:14:36
*/

import React from 'react';
import Child from './components/child.jsx';
class App extends React.Component {

    render() {
        return (<div>
            <h1>服务端渲染</h1>
            <Child/>
        </div>);
    }
}

export default App;