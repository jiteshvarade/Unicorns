import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Landing-page";

import Form from "./components/Form"
import DashBoard from "./components/DashBoard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/form",
      element: <Form />
    },
    {
      path : "/dashboard",
      element: <DashBoard />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
