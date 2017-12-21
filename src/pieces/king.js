import Piece from './piece';
import KingWhite from '../assets/svg/Chess_White_King.svg';
import KingBlack from '../assets/svg/Chess_Black_King.svg';

export default class King extends Piece {
  constructor(player){
    super(player, (player === 1? KingWhite : KingBlack));
  }

  isMovePossible(src, dest){
    return (src - 9 === dest || 
      src - 8 === dest || 
      src - 7 === dest || 
      src + 1 === dest || 
      src + 9 === dest || 
      src + 8 === dest || 
      src + 7 === dest || 
      src - 1 === dest);
  }

  getSrcToDestPath(src, dest){
    return [];
  }
}
