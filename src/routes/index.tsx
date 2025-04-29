import AuthLayout from "@/components/layouts/AuthLayout";
import CommonLayout from "@/components/layouts/CommonLayout";
import RootLayout from "@/components/layouts/RootLayout";
import UserLayout from "@/components/layouts/UserLayout";
import AuthWrapper from "@/components/wrappers/AuthWrapper";
import SignInPage from "@/pages/(authentication)/SignInPage";
import SignUpPage from "@/pages/(authentication)/SignUpPage";
import ErrorPage from "@/pages/(common)/ErrorPage";
import HomePage from "@/pages/(common)/HomePage";
import NotFoundPage from "@/pages/(common)/NotFoundPage";
import ProfilePage from "@/pages/(user)/ProfilePage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <CommonLayout />,
        children: [{ index: true, element: <HomePage /> }],
      },
      {
        path: "user",
        element: <AuthWrapper><UserLayout /></AuthWrapper>,
        children: [
          { path: "profile", element: <AuthWrapper><ProfilePage /></AuthWrapper> },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { path: "sign-in", element: <SignInPage /> },
          { path: "sign-up", element: <SignUpPage /> },
        ],
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
