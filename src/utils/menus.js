import Home from '../containers/Home'
import About from '../containers/About'
import Drag from '../containers/Drag'

import r from 'constants/routes'

export const menus = [
  {
    id: 'home',
    path: r.home,
    component: Home
  },
  {
    id: 'about',
    path: r.about,
    component: About
  },
  { id: 'drag', path: r.drag, component: Drag }
]
