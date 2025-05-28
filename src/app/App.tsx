import { memo } from 'react';
import * as cls from './App.module.scss';
import { AppRouter } from './providers/AppRouter/AppRouter';
   
export const App = memo(() => {
    return <div className={cls.App}>
                hello
                <AppRouter />
            </div>
})