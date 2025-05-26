import { memo } from 'react';
import * as cls from './App.module.scss';
            
export const App = memo(() => {
    return <div className={cls.App}>
                hello
            </div>
})