import { CssBaseline, ThemeProvider } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import { theme } from "./theme/theme";


const router = createBrowserRouter([
  {
    element: <Main />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      }
    ]
  }
])

function App() {


  return (<ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <CssBaseline />
  </ThemeProvider>)




}

export default App;
