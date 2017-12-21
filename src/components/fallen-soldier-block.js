import React, {Component} from 'react';

import Square from './square.js';

export default class FallenSoldierBlock extends Component {

  renderSquare(square) {
    return <Square
    piece = {square} 
    style = {square.style}
    />
  }


  render() {
    return (
      <div>
      <div className="board-row">{this.props.whiteFallenSoldiers.map((ws, index) =>
        this.renderSquare(ws, index)
        )}</div>
      <div className="board-row">{this.props.blackFallenSoldiers.map((bs, index) =>
        this.renderSquare(bs, index)
        )}</div>
      </div>
      );
  }
}

