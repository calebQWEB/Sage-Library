import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home/Home'
import Books from '../Pages/Books/Books'
import LoggedIn from '../Pages/LoggedIn/LoggedIn'

const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                    // element: <LoggedIn />
                },

                {
                    path: '/books',
                    element: <Books />
                },

                {
                    path: '/login',
                    element: <LoggedIn />
                }
            ]
        }
    ])
  return <RouterProvider router={router}/>
}

export default Router