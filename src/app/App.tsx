import { memo } from 'react';
import { AppRouter } from './providers/AppRouter/AppRouter';
import { Navbar } from '@widgets';
import * as cls from './App.module.scss';

export const App = memo(() => {
    return <div className={cls.App}>
                <Navbar />
                <AppRouter />
            </div>
})