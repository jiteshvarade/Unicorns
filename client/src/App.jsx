import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/Landing-page";

import Form from "./components/Form"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/form",
      element: <Form />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
