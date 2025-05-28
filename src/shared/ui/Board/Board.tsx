import { memo } from 'react';
import { Square, SquareClickProps } from '@shared/ui';
import * as cls from './Board.module.scss';

export type CoordsType = {
  [keys: number]: string
}

interface BoardProps {
  boardArr: string[][],
  coords: CoordsType,
  onClick: (args: SquareClickProps) => void
}

export const Board = memo(({ boardArr, onClick, coords }: BoardProps) => {
    return (
      <div className={cls.Board}>
        {boardArr.map((arr2: any, i1: any) => 
          <div key={i1} className={cls.row}>
            {arr2.map((el: string | null, i2: number) => 
              <Square key={`${i1}${i2}`} item={el} i1={i1} i2={i2} onClick={onClick} coords={coords} />)}
          </div>)}
      </div>
    );
})