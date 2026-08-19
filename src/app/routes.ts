import { createBrowserRouter } from 'react-router';
import Layout from './routes/Layout';
import Home from './routes/Home';
import NotFound from './routes/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: '*', Component: NotFound },
    ],
  },
]);
