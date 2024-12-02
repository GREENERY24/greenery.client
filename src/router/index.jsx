import { useRoutes } from 'react-router-dom';

import Start from '../pages/Start';

export default function Router() {
  return useRoutes([
    {
      path: '/',
      children: [
        { index: true, element: <Start /> },
      ]
    }
    // { path: '*', element: <NotFound /> }
  ]);
}
