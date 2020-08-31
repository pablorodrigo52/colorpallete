import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
    render (){
        return <footer className='footer'>
            <p className={this.props.somuchlight}> Wanna contribute? Please access the source code <a target="_blank" rel="noopener noreferrer" href="https://github.com/pablorodrigo52/colorpallete">here</a>.</p>
            <p className={this.props.somuchlight}><a target="_blank" rel="noopener noreferrer" href="https://icons8.com.br/icons/set/paint-palette">Paint Palette icon</a> by <a target="_blank" rel="noopener noreferrer"  href="https://icons8.com.br">Icons8</a></p>
        </footer>
    }
}

export default Footer