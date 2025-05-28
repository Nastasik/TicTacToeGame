
import { useMemo } from 'react';
import * as cls from './Square.module.scss';
import { Close, RadioButtonUnchecked } from '@mui/icons-material';

export type SquareClickProps = {
    i1: number, 
    i2: number, 
    target: any
}

interface SquareProps {
    coords: any;
    item: string | null;
    i1: number;
    i2: number;
    onClick: (args: SquareClickProps) => void;
}

export const Square = ({ item, i1, i2, onClick, coords }: SquareProps) => {
    const selectedSquareCls = useMemo(() => Object.values(coords).includes(JSON.stringify({ x: i2, y: i1, p: item})) ? cls.selected : '', [coords, i2, i1, item])
    
    const handleClick = ({target}: any) => {
        onClick({i1, i2, target})
    }

    return <button onClick={handleClick} className={`${cls.Square} ${selectedSquareCls}`}>
                {item === 'x' ? <Close fontSize="small"/> : null}
                {item === 'o' ? <RadioButtonUnchecked fontSize="small"/> : null}
            </button>
  }