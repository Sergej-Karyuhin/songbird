import React, {Component} from 'react'
import './style.css';
import theend from './theend.gif';

class GameEnd extends Component {
  render() {
    const content = this.props.score === this.props.maxScore ?
        <div className="congrats-container hide">
          <h2 className="text-primary congrats">Congrats! You are the High Sparrow!!!</h2>
          <img src={theend} alt="theend"></img>
        </div>
    :
       <div className="congrats-container hide">
          <h2 className="congrats">Congrats!</h2>
          <p>Result: {this.props.score} / {this.props.maxScore}</p>
          <img src={theend} alt="theend"></img>
          <div className="try-again" onClick={this.props.restartGame}><p>Play again</p></div>
        </div>
    return (
      <div>{content}</div>
    );
  }
}


export default GameEnd;
