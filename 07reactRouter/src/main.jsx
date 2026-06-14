import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import './index.css'
import App from './App.jsx'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoLoader} from './components/Github/Github.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'user/:userid',
        element: <User />
      },
      {
        loader: githubInfoLoader,
        path: 'github',
        element: <Github />,
        errorElement: <ErrorPage/>
      }
    ]
  },
  {}
])

// another way to create router using createRoutesFromElements
// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path='/' element={<App />}>
//     <Route index element={<Home />} />
//     <Route path='about' element={<About />} />
//     <Route path='contact' element={<Contact />} />
//   </Route>
// ))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
