import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./layouts/Root";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import SSS from "./pages/FAQ";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import About from "./pages/About";
import Payment from "./pages/Payment";
import { HomePageLoader, ProductDetailLoader, ProductListLoader, RootLoader } from "./API";
import Address from "./pages/Account/Adress";
import Order from "./pages/Account/Order";
import Info from "./pages/Account/Info";
import OrderDetail from "./pages/Account/Order/Detail";
import LoginRegister from "./pages/LoginRegister";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader:RootLoader,
    errorElement: <div>404</div>,
    children: [
      {
        errorElement: <div>404</div>,
        children: [
          {
            index: true,
            element: <HomePage></HomePage>,
            loader:HomePageLoader
          },
          {
            path: "/products",
            element: <ProductList/>,
            loader:ProductListLoader
          },
          {
            path: "/:category",
            element: <ProductList />,
            loader: ProductListLoader,
          },
          {
            path: "products/:slug",
            element: <ProductDetail />,
            loader: ProductDetailLoader,
          },
          {
            path: "/faq",
            element: <SSS></SSS>,
          },
          {
            path: "/contact",
            element: <Contact></Contact>,
          },
          {
            path: "/about",
            element: <About></About>,
          },
          {
            path: "/",
            element: <Account></Account>,
            children: [
              {
                path:"order",
                children:[
                  {
                    index:true,
                    element: <Order></Order>,
                  },
                  {
                    path:":id",
                    element:<OrderDetail></OrderDetail>
                  }
                ]
              },
              {
                path:"address",
                element: <Address></Address>,
              },
              {
                path:"info",
                element: <Info></Info>,
              },
            ]
          },
          {
            path:"/login",
            element:<LoginRegister/>,
          },
          {
            path:"/register",
            element:<LoginRegister/>,
          }
        ],
      },
    ],
  },
  {
    path: "/payment",
    element: <Payment></Payment>,
  }
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
