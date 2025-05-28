import React, { memo } from "react";
import * as cls from "./Navbar.module.scss";
import { AppLink } from "@shared/ui";

const LINKS_CONFIG = [{
    path: '/',
    title: 'SETTINGS'
}, {
    path: '/game',
    title: 'GAME'
}, {
    path: '/history',
    title: 'HISTORY'
}];

const TITLE = 'TicTacToy';

export const Navbar = memo(({}) => {
  return (
    <div className={cls.Navbar}>
      <h1 className={cls.title}>{TITLE}</h1>
      <div className={cls.links}>
        {LINKS_CONFIG.map(({ title, path }) => <AppLink key={title} title={title} to={path} /> )}
      </div>
    </div>
  )
});

