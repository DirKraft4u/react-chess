import Piece from './piece';
import BishopWhite from '../assets/svg/Chess_White_Bishop.svg';
import BishopBlack from '../assets/svg/Chess_Black_Bishop.svg';

export default class Bishop extends Piece {
  constructor(player){
    super(player, (player === 1? BishopWhite : BishopBlack));
  }

  isMovePossible(src, dest){
    return (Math.abs(src - dest) % 9 === 0 || Math.abs(src - dest) % 7 === 0);
  }

  getSrcToDestPath(src, dest){
    let path = [], pathStart, pathEnd, incrementBy;
    if(src > dest){
      pathStart = dest;
      pathEnd = src;
    }
    else{
      pathStart = src;
      pathEnd = dest;
    }
    if(Math.abs(src - dest) % 9 === 0){
      incrementBy = 9;
      pathStart += 9;
    }
    else{
      incrementBy = 7;
      pathStart += 7;
    }

    for(let i = pathStart; i < pathEnd; i+=incrementBy){
      path.push(i);
    }
    return path;
  }
}
