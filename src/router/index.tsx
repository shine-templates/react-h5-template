import { createBrowserRouter } from 'react-router-dom'
import Home from '../views/home'
import Mine from '../views/mine'
import Detail from '../views/detail'
import Layout from '../layout'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Layout />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'mine',
        element: <Mine />,
      },
    ],
  },
  {
    path: '/detail',
    element: <Detail />,
  },
])

export default router
