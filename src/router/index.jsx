import { useRoutes } from 'react-router-dom';

import Start from '../pages/Start';
import MainView from '../pages/MainView';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Start /> },
        { path: '/main', element: <MainView /> }
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
