import { useRoutes } from 'react-router-dom';

import Start from '../pages/Start/indes';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Start /> },
        // { path: '/splash', element: <Splash /> },
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
