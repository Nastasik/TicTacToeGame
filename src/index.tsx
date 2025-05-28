import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');

if (!container) {
    throw new Error('нет контейнера root');
}

const root = createRoot(container);
root.render(<BrowserRouter><App /></BrowserRouter>);
