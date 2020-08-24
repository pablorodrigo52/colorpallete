import React from 'react';
import '../css/App.css';
import Color from './Color.jsx';

import { rgbToHex, copyToClipboard, normalizeToNumber } from './helper/Util.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClone } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  // um componente pode receber propriedades ex.: <App name="pablo" /> ---> this.props.name ---> returns "pablo"
  // o construtor não é obrigatório

  constructor(props){
    super(props); // em react, sempre que tiver um construtor de uma classe eu sou obrigado a invocar o super
    this.state = {
      panelColor: 'rgba(0, 0, 0, 0.2)',
      rgbColor: 'rgba(0, 0, 0, 0.2)',
      hexColor: '#000000',
      somuchlight: false,
      saturation: 100,
      lightness: 50
    }
    this._copyIcon = <FontAwesomeIcon icon={faClone} />
  }

  render () {
    return (
      <div className="group">
        <section className="colors">
          {this._renderPallete().map(color => color)}
        </section>
        <section className="panel" style={{background: this.state.panelColor}}>
          <div className="codes">
            <div className={this.state.somuchlight ? 'blackfont' : ''}>{this.state.rgbColor} <FontAwesomeIcon onClick={this._copy} className={this.state.somuchlight ? 'blackfont' : ''} icon={faClone} /></div>
            <div className={this.state.somuchlight ? 'blackfont' : ''}>{this.state.hexColor} <FontAwesomeIcon onClick={this._copy} className={this.state.somuchlight ? 'blackfont' : ''} icon={faClone} /></div>
          </div>
        </section>
      </div>
    )
  }

  _renderPallete(){
    let colors = [];
    for(let hue = 0; hue < 359 /* Range of colors = 400 */; hue++){
      colors.push(
        <Color 
          key={hue} 
          hue={hue} 
          saturation={this.state.saturation} 
          lightness={this.state.lightness}
          mousemove={(e)=> {this._setHoverColor(e)}}
        />);
    }
    return colors;
  }

  _setHoverColor(e){
    const color = e.target.style.backgroundColor.toString();
    let [r, g, b] = [...color.substring(color.indexOf("(")+1).split(",")];

    r = normalizeToNumber(r);
    g = normalizeToNumber(g);
    b = normalizeToNumber(b);
    // a = normalizeToNumber(a);
    
    if ((r > 235 && g > 235) || (g === 255)) { // if has a strong yellow i will cannot read the codes very well.
      this.setState({
        somuchlight: true
      });
    } else {
      this.setState({
        somuchlight: false
      });
    }

    this.setState({
      panelColor: e.target.style.backgroundColor,
      rgbColor: e.target.style.backgroundColor,
      hexColor: rgbToHex(r,g,b)
    });
  }

  _copy(e){
    let txt;
    if (e.target.tagName === 'path'){
      txt = e.target.parentNode.parentNode.innerText;
    } else if (e.target.tagName === 'svg'){
      txt = e.target.parentNode.innerText;
    } else {
      throw new Error('Cannot copy by button.');
    }
    if (!copyToClipboard(txt.toLowerCase())){
      alert('cannot copy by button');
    } else {
      let msg = document.createElement('div');
      msg.innerHTML = 'Copied!';
      msg.classList.add('msg');
      e.target.parentNode.parentNode.insertAdjacentElement('beforeend', msg);
      msg.classList.add('effect');
      setTimeout(()=>{
        msg.remove();
      }, 1000);
    }
  }
}

export default App;
