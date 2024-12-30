import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

let routes = createBrowserRouter([
  {
    path: "/" , element: <Layout></Layout>,children: [
      {
        index : true, element: <Home />,
      },
      {
        path: "/about", element: <About />,
      },
      {
        path: "/contact", element: <Contact />,
      },
      {
        path: "/portfolio", element: <Portfolio />,
      },{
        path: "*", element: <div>404</div>,
      }
    ]
  },
  
])
function App() {

  return (
    <>
      
      <RouterProvider router={routes} />
      <Footer />

    </>
  )
}

export default App
