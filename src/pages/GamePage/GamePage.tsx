import React, { memo } from "react";
import * as cls from "./GamePage.module.scss";
import { Board } from "@features/Board/ui/Board";

export const GamePage = memo(({}) => {
  return (
    <div className={cls.GamePage}>
      GamePage
      <Board />
    </div>
  )
});

