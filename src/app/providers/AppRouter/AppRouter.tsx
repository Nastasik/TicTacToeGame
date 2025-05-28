import {
    Suspense, memo,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './routeConfig';

export const AppRouter = memo(() => {
    return (
        <Suspense fallback={'Загрузка...'}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}: any) => <Route
                key={path}
                path={path}
                element={element}
            />)}
            </Routes>
        </Suspense>
    );
});
