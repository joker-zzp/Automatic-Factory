import {
  // BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'
import { ErrNotFound } from "../views/error/index"

import Home from '../views/home'
import About from '../views/about'

export interface NavigationItem {
  title: string,
  path: string
}

export const Navigation: NavigationItem[] = [
  {
    title: '主页',
    path: '/'
  },
  {
    title: '关于',
    path: '/about'
  }
]

const GetAllRoutes = () => {
  const routes = useRoutes([
    {
      index: true,
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '*',
      element: <ErrNotFound />,
    }
  ])
  return routes
}

interface routerProps {
  history?: string
}

export const BaseRouter = (props:routerProps) => {
  return (
    <GetAllRoutes />
  )
}

