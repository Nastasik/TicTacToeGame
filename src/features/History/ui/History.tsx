import React, { memo, useEffect, useState } from "react";
import * as cls from "./History.module.scss";
import { HistoryCard } from "./HistoryCard";

export const History = memo(({}) => {
    const [history, setHistory] = useState([])

    useEffect(() => {
        const newData = localStorage.getItem('history')
        if(newData) {
            setHistory(JSON.parse(newData))
        }
    }, [])

    return (
        <div className={cls.History}>
            {history.map(({boardArr, coords, player1, player2, winner, date}) => 
                <HistoryCard 
                    key={date} 
                    boardArr={boardArr} 
                    coords={coords} 
                    player1={player1} 
                    player2={player2} 
                    winner={winner} 
                    date={date} />)}
        </div>
    )
});

