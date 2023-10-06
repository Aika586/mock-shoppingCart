import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutPage from "./components/AboutPage";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";



const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index:true, element: <AboutPage /> },
        { path: "products", element: <Products/> },
        { path: "shoppingCart", element: <ShoppingCart/> },
      ],
    },
    
  ]);

  return <RouterProvider router={router} />;
};

export default Router;