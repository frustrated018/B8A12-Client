import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import Products from "../Pages/Products/Products";
import PrivateRoute from "./privateRoute";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Dashboard from "../Layout/Dashboard";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import AdminRoute from "./AdminRoute";
import ProductReviewQueue from "../Pages/Dashboard/ProductReviewQueue/ProductReviewQueue";
import ReportedProducts from "../Pages/Dashboard/ReportedProducts/ReportedProducts";

const router = createBrowserRouter([
  // Main Routes
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <Products></Products>
          </PrivateRoute>
        ),
      },
      {
        path: "products/details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
    ],
  },

  // Dahsboard Routes

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // normal routes
      {
        path: "userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "addproduct",
        element: <AddProduct></AddProduct>,
      },

      // Admin routes
      {
        path: "manageusers",
        element: (
          <AdminRoute>
            <ManageUsers></ManageUsers>
          </AdminRoute>
        ),
      },

      // Modarator Routes
      {
        path: "productreviewqueue",
        element: <ProductReviewQueue></ProductReviewQueue>,
      },
      {
        path: "products/details/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "reportedproducts",
        element: <ReportedProducts></ReportedProducts>,
      },
    ],
  },
]);

export default router;
