import { Link, LinkProps } from 'react-router-dom';
import React, { FC, memo } from 'react';
import * as cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps{
    title: string;
}

export const AppLink: FC<AppLinkProps> = memo(({
    title, to, ...otherProps
}: AppLinkProps) => (
    <Link
      className={cls.link}
      to={to}
      {...otherProps}
    >
        <span className={cls.title}>{title}</span>
    </Link>
));
