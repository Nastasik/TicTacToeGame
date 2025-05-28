import { HistoryPage, SettingsPage, GamePage } from "@pages";

export enum AppRoutes {
    SETTINGS = 'settings',
    GAME = 'game',
    HISTORY = 'history',
}

export const routeConfig = {
    [AppRoutes.SETTINGS]: {
        path: '/',
        element: <SettingsPage />,
    },
    [AppRoutes.GAME]: {
        path: '/game',
        element: <GamePage  />,
    },
    [AppRoutes.HISTORY]: {
        path: '/history',
        element: <HistoryPage />,
    },
};
