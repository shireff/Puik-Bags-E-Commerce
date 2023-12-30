import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Shop from "./Components/Shop/Shop";
import Productpage from "./Components/Productpage/Productpage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Checkout from "./Components/Checkout/Checkout";
import Cart from "./Components/Cart/Cart";
import NotFound from "./Components/NotFound/NotFound";
import Kid from "./Components/Kid/Kid";
import Men from "./Components/Men/Men";
import Modren from "./Components/Modren/Modren";
import Sporty from "./Components/Sporty/Sporty";
import Vintage from "./Components/Vintage/Vintage";
export default function App() {
  let router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "shop",
          element: <Shop />,
          children: [
            { index: true, element: <Kid /> },
            { path: "men", element: <Men /> },
            { path: "modren", element: <Modren /> },
            { path: "sporty", element: <Sporty /> },
            { path: "vintage", element: <Vintage /> },
          ],
        },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "productpage", element: <Productpage /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "checkout", element: <Checkout /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}
