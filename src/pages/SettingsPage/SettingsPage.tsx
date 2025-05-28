import React, { memo } from "react";
import * as cls from "./SettingsPage.module.scss";
import { PlayersForm } from "@features/PlayersForm/ui/PlayersForm";

export const SettingsPage = memo(({}) => {
  return (
    <div className={cls.SettingsPage}>     
      <PlayersForm />
    </div>
  )
});

