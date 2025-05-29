import React, { memo } from "react";
import * as cls from "./HistoryPage.module.scss";
import { History } from "@features/History/ui/History";
import { Typography } from "@mui/material";

export const HistoryPage = memo(({}) => {
  return (
    <div className={cls.HistoryPage}>
      <Typography variant='h6' className={cls.text}>История игр:</Typography>
      <History />
    </div>
  )
});

