import Piece from './piece';
import KnightWhite from '../assets/svg/Chess_White_Knight.svg';
import KnightBlack from '../assets/svg/Chess_Black_Knight.svg';

export default class Knight extends Piece {
  constructor(player){
    super(player, (player === 1? KnightWhite : KnightBlack));
  }

  isMovePossible(src, dest){
    return (src - 17 === dest || 
      src - 10 === dest || 
      src + 6 === dest || 
      src + 15 === dest || 
      src - 15 === dest || 
      src - 6 === dest || 
      src + 10 === dest || 
      src + 17 === dest);
  }

  getSrcToDestPath(){
    return [];
  }
}
