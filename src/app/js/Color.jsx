import React from 'react';

class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hue: null,
            saturation: 100,
            lightness: 50,
        }
    }
    _setBackground(){
        return {
            background: `hsl(${this.props.hue},${this.props.saturation}%,${this.props.lightness}%)`,
            display: 'inline-block',
            height: '100vh'
        }
    }
    
    _onMouseMove = (e) =>{
        this.props.mousemove(e);
    }

    render(){
        return <div className='color' style={this._setBackground()} onMouseMove={this._onMouseMove}></div>;
    }
}

export default Color;