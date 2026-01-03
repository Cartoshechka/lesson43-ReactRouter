import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'

export interface RouteConfig {
  path: string
  element: React.ReactNode
  label: string
  index?: boolean
}

export const routes: RouteConfig[] = [
  {
    path: '/',
    element: <Home />,
    label: 'Home',
    index: true
  },
  {
    path: '/about',
    element: <About />,
    label: 'About'
  },
  {
    path: '/contact',
    element: <Contact />,
    label: 'Contact'
  }
]
