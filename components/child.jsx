import React from 'react';
class Child extends React.Component {
    constructor(props){
        super(props);
        this.clickToColor = this.clickToColor.bind(this);
        this.state = {
            color:'#'+(Math.random()*0xFFFFFF<<0).toString(16)
        };
    }
    clickToColor(){
        this.setState({
            color: '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
        });
    }
    render(){
        return (
            <div onClick={this.clickToColor} style={{color:this.state.color}}>
                <span>hello world</span>
            </div>
        )
    }
};
export default Child;