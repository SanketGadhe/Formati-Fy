import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Landing from "./Components/Landing.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import SharedProject from "./Components/SharedProject.jsx";
import Newproject from "./Components/Newproject.jsx";
import ExistingProject from "./Components/ExistingProject.jsx";
import Templates from "./Components/Templates.jsx";
import Conferences from "./Components/Conferences.jsx";
import Premium from "./Components/Premium.jsx";


const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="" element={<Landing />} />
      <Route path="Home" element={<Landing/>} />
      <Route path="NewProject" element={<Newproject />} />
      <Route path="ExistingProject" element={<ExistingProject />} />
      <Route path="SharedProject" element={<SharedProject />} />
      <Route path="Templates" element={<Templates />} />
      <Route path="Conferences" element={<Conferences />} />
      <Route path="Premium" element={<Premium />} />
    </Route>,
  ])
);
ReactDOM.createRoot(document.getElementById("root")).render(
<RouterProvider router={route}>

</RouterProvider>

);
