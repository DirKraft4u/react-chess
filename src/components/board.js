import React, {Component} from 'react';
import Square from './square.js';

export default class Board extends Component {

  renderSquare(i, squareShade) {
    return <Square 
    piece = {this.props.squares[i]} 
    style = {this.props.squares[i]? this.props.squares[i].style : null}
    shade = {squareShade}
    onMouseDown={() => this.props.onMouseDown(i)}
    onMouseUp={() => this.props.onMouseUp(i)}
    />
  }

  render() {
    const board = [];
    for(let i = 0; i < 8; i++){
      const squareRows = [];
      for(let j = 0; j < 8; j++){
        const squareShade = (isEven(i) && isEven(j)) || (!isEven(i) && !isEven(j))? "light-square" : "dark-square";
        squareRows.push(this.renderSquare((i*8) + j, squareShade));
      }
      board.push(<div className="board-row">{squareRows}</div>)
    }

    return (
      <div>
        {board}
      </div>
    );
  }
}


function isEven(num){
  return num % 2 === 0
}