import React from 'react';
import '../css/App.css';
import Color from './Color.jsx';

class App extends React.Component {
  // um componente pode receber propriedades ex.: <App name="pablo" /> ---> this.props.name ---> returns "pablo"
  // o construtor não é obrigatório

  constructor(props){
    super(props); // em react, sempre que tiver um construtor de uma classe eu sou obrigado a invocar o super
    this.state = {
      panelColor: 'rgba(0,0,0,0.2)'
    }
  }

  _renderPallete(){
    let colors = [];
    for(let hue = 0; hue < 359 /* Range of colors = 400 */; hue++){
      colors.push(
        <Color 
          key={hue} 
          hue={hue} 
          saturation={100} 
          lightness={50}
          mousemove={(e)=> {this._setPanelColor(e)}}
        />);
    }
    return colors;
  }

  _setPanelColor(e){
    this.setState({
      panelColor: e.target.style.backgroundColor
    });
  }

  render () {
    return (
      <div className="group">
        <section className="colors">
          {this._renderPallete().map(color => color)}
        </section>
        <section 
          className="panel"
          style={{background: this.state.panelColor}}
          ></section>
      </div>
    )
  }
}

export default App;
