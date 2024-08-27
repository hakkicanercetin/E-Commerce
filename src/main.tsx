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
import Detay from "./pages/Account/Order/Detail";
import DatasProvider from "./Context";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>404</div>,
    children: [
      {
        errorElement: <div>404</div>,
        children: [
          {
            index: true,
            element: <HomePage></HomePage>,
          },
          {
            path: "/:productId",
            element: <ProductDetail/>,
          },
          {
            path: "/protein",
            element: <ProductList/>,
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
            path: "/account",
            element: <Account></Account>,
            children: [
              {
                path: ":id",
                element: <Detay></Detay>,
              },
            ],
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DatasProvider>
      <RouterProvider router={router} />
    </DatasProvider>
  </React.StrictMode>
);
