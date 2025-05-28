import { memo, useCallback, useEffect, useState } from 'react';
import { Board, SquareClickProps } from '@shared/ui';
import { getIsWin } from '../lib/getIsWin';
import * as cls from './TicTacToy.module.scss';
import { Typography } from '@mui/material';

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
  const [players, setPlayers] = useState({ player1: 'x', player2: 'o' })

  useEffect(() => {
    const newPlayers = localStorage.getItem('players')
    if(newPlayers) {
      setPlayers(JSON.parse(newPlayers))
    } 
  }, [])

  const handlerClick = useCallback(({ i1, i2, target }: SquareClickProps) => {
    BOARD_ARR[i1][i2]=player
    
    const {isWin, coords } = getIsWin({x: i2, y: i1, arr: BOARD_ARR })
    setIsWin(isWin)
    
    if(isWin) {
      setWinner(player=== 'x' ? players.player1 : players.player2)
      setCoords(coords)
    }
    setPlayer((player === 'x') ? 'o' : 'x')
  }, [player])
  
  return (
    <div className={cls.TicTacToy}>
      <Typography variant='h6' className={cls.title}>{`${players.player1} vs ${players.player2}`}</Typography>
      <Board boardArr={BOARD_ARR} onClick={handlerClick} coords={coords}/>
      <Typography variant='h6' className={cls.winner}>{isWin ? `Player ${winner} wins` : ''}</Typography>
    </div>
  );
})