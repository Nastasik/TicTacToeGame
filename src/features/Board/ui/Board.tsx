import { memo, useCallback, useState } from 'react';
import { Square, SquareClickProps } from '@shared/ui';
import { getIsWin } from '../lib/getIsWin';
import * as cls from './Board.module.scss';

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

export const Board = memo(() => {
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
      <div className={cls.Board}>
        {BOARD_ARR.map((arr2: any, i1: any) => 
          <div key={i1} className={cls.row}>
            {arr2.map((el: string | null, i2: number) => 
              <Square key={`${i1}${i2}`} item={el} i1={i1} i2={i2} onClick={handlerClick} coords={coords} />)}</div>)}
        <div>{isWin ? `Player ${winner} wins` : ''}</div>
      </div>
    );
})