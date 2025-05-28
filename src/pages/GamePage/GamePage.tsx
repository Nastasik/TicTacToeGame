import React, { memo } from "react";
import * as cls from "./GamePage.module.scss";
import { TicTacToy } from "@features/TicTacToy/ui/TicTacToy";

export const GamePage = memo(({}) => {
  return (
    <div className={cls.GamePage}>
      GamePage
      <TicTacToy />
    </div>
  )
});

