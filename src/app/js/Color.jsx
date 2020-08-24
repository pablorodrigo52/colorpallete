import React from 'react';
import '../css/Color.css';

class Color extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            lastDetachColor: null
        }
    }

    _setBackground(){
        return {
            background: `hsl(${this.props.hue},${this.props.saturation}%,${this.props.lightness}%)`,
            // display: 'inline',
            height: '100vh',
            // flex: 'auto'
        }
    }
    
    _onMouseMove = (e) =>{
        this.props.mousemove(e);
    }

    _detachColor(e){
        if (e.target.classList.contains('detach')){
            this.state.lastDetachColor.classList.remove('detach');
            setTimeout(()=>this.state.lastDetachColor.remove(), 100);
        } else {
            const aux = e.target;
            setTimeout(()=>aux.classList.add('detach'), 1);
            e.target.parentNode.insertBefore(aux, e.target);
            this.setState({
                lastDetachColor: aux
            });
        }
        this._detachAllColors();
    }

    _detachAllColors(){
        document.addEventListener('keydown', (e)=>{
            if (e.keyCode === 27) {
                document.querySelectorAll('.color.detach')
                    .forEach(el => {
                        el.classList.remove('detach')
                        setTimeout(()=>el.remove(), 100);
                    });
                this.setState({
                    lastDetachColor: null
                });
            }
        });
    }

    render(){
        return <div className='color' 
            onClick={(e)=>this._detachColor(e)} 
            style={this._setBackground()} 
            onMouseMove={this._onMouseMove}>
            </div>;
    }
}

export default Color;