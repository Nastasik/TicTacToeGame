import React, { memo } from "react";
import * as cls from "./HistoryCard.module.scss";
import { Board, CoordsType } from "@shared/ui";
import { Typography } from "@mui/material";

interface HistoryCardProps {
    boardArr: string[][], 
    coords: CoordsType, 
    player1: string, 
    player2: string,
    winner: string,
    date: Date
}

export const HistoryCard = memo(({boardArr, coords, player1, player2, winner, date }: HistoryCardProps) => {
  return (
    <div className={cls.HistoryCard}>
        <div className={cls.wrapper}>
            <Board boardArr={boardArr} coords={coords}/>
        </div>
        <div className={cls.info}>
            <Typography variant='h6'>{`${player1} vs ${player2}`}</Typography>
            <Typography variant='h6'>{`Победитель: ${winner}`}</Typography>
            <Typography variant='h6'>{`Дата: ${date}`}</Typography>
        </div> 
    </div>
  )
});

