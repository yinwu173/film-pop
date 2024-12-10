import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
console.log(3);
import App from './App.jsx'
import Home from './pages/Home.jsx'
console.log(6);
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
    ]
  }
])
console.log(20);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
