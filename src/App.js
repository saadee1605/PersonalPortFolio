import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Services from './Components/Services';
import MyWork from './Components/MyWork';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Hero /><About /><Services /><MyWork /><Contact /><Footer /></>
    },
    {
      path: 'about',
      element: <><Navbar /><About /><Footer /></>
    },
    {
      path: '/services',
      element: <><Navbar /><Services /><Footer /></>
    },
    {
      path: '/portfolio',
      element: <><Navbar /><MyWork /><Footer /></>
    },
    {
      path: '/Contact',
      element: <><Navbar /><Contact /><Footer /></>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
