import HomePage from "./Routes/HomePage";
import Layout from "./Routes/Layout";
import ListPage from "./Routes/ListPage";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SinglePage from "./Routes/SinglePage";
import Login from "./Routes/Login";
import Register from "./Routes/Register";
import { useState } from "react";
import Profile from "./Routes/Profile";
import ProtectedRoute from "./Lib/ProtectedRoute";

function App() {
  const [user, setUser] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout user={user} setUser={setUser} />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login setUser={setUser} />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/Profile",
          element: (
            <ProtectedRoute isAuthenticated={user}>
              <Profile />
            </ProtectedRoute>
          ),
        },

        {
          path: "*",
          element: (
            <div className="w-full text-center mt-10">Page not Found</div>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster
        position="top-center"
        containerStyle={{ margin: "5px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 4000,
          },
          style: {
            fontSize: "18px",
            width: "500px",
            padding: "16px 24px",
            color: "white",
            backgroundColor: "black",
            borderRadius: "8px",
          },
        }}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
