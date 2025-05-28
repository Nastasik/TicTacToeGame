import { memo, useCallback, useState } from 'react';
import { Board, SquareClickProps } from '@shared/ui';
import { getIsWin } from '../lib/getIsWin';
import * as cls from './TicTacToy.module.scss';

// import { Board } from '@shared/ui/Board/Board';

export const arr: any = 
[[null, null, null, null, null, null], 
[null, null, null, null, null, null],
[null, null, null, null, null, null],
[null, null, null, null, null, null],
[null, null, null, null, null, null],
[null, null, null, null, null, null],]

 const BOARD_ARR_COUNT = 6
export const BOARD_ARR = Array.from({length: BOARD_ARR_COUNT}, () => Array(BOARD_ARR_COUNT).fill(null));
console.log(BOARD_ARR, 'BOARD_ARR')

export const TicTacToy = memo(() => {
  const [isWin, setIsWin] = useState(false)
  const [player, setPlayer] = useState('x')
  const [winner, setWinner] = useState('')
  const [coords, setCoords] = useState({})

  const handlerClick = useCallback(({ i1, i2, target }: SquareClickProps) => {
    BOARD_ARR[i1][i2]=player
    
    const {isWin, coords } = getIsWin({x: i2, y: i1, arr: BOARD_ARR })
    setIsWin(isWin)
    
    if(isWin) {
      setWinner(player)
      setCoords(coords)
    }
    setPlayer((player === 'x') ? 'o' : 'x')
  }, [player])
  
    return (
      <div className={cls.TicTacToy}>
        <Board boardArr={BOARD_ARR} onClick={handlerClick} coords={coords}/>
        <div>{isWin ? `Player ${winner} wins` : ''}</div>
      </div>
    );
})