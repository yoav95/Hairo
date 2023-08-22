import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import { Children } from "react";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
